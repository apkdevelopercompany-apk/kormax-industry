'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const inquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  quantity: z.string().min(1, 'Please specify quantity'),
  specifications: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type InquiryFormData = z.infer<typeof inquirySchema>;

interface InquiryFormProps {
  productName?: string;
}

export default function InquiryForm({ productName }: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      specifications: productName || '',
    },
  });

  const onSubmit = async (data: InquiryFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: 'Inquiry Submitted',
      description: 'We will get back to you within 24 hours.',
    });
    reset();
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
            placeholder="John Doe"
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
            placeholder="kormaxaluwyn@gmail.com"
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
            placeholder="+91 99838 11163"
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

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-primary-600 mb-1.5">
          Required Quantity <span className="text-red-500">*</span>
        </label>
        <input
          {...register('quantity')}
          type="text"
          placeholder="e.g., 500 MT, 1000 Kgs"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
        />
        {errors.quantity && (
          <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
        )}
      </div>

      {/* Product/Specifications */}
      <div>
        <label className="block text-sm font-medium text-primary-600 mb-1.5">
          Product / Specifications
        </label>
        <input
          {...register('specifications')}
          type="text"
          placeholder="e.g., SS 316L Seamless Pipe, Schedule 40"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-primary-600 mb-1.5">
          Additional Details <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Please provide any additional specifications, delivery requirements, or questions..."
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
            Submitting...
          </>
        ) : (
          <>
            Submit Inquiry
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
}
