'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { companyInfo } from '@/lib/data';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const message = `*New Inquiry from Kormax Website*\n\n` +
        `*Name:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Phone:* ${data.phone}\n` +
        (data.company ? `*Company:* ${data.company}\n` : '') +
        `*Subject:* ${data.subject}\n\n` +
        `*Message:*\n${data.message}`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappNumber = companyInfo.whatsapp.replace(/[^0-9]/g, '');
      
      // Open WhatsApp chat in a new tab
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

      toast({
        title: 'Redirecting to WhatsApp',
        description: 'Opening WhatsApp to send your message details.',
      });
      reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-primary-600 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-primary-600 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            type="email"
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-primary-600 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+91 xxxxx xxxxx"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium text-primary-600 mb-1.5">
            Company Name
          </label>
          <input
            {...register('company')}
            type="text"
            placeholder="ABC Industries Ltd."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-primary-600 mb-1.5">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          {...register('subject')}
          type="text"
          placeholder="How can we help you?"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-primary-600 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={5}
          placeholder="Please describe your inquiry in detail..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent-500 hover:bg-accent-600 text-white py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}
