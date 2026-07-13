'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight, Shield, Award, Globe, Headphones } from 'lucide-react';
import dynamic from 'next/dynamic';
const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  loading: () => <div className="p-8 text-center text-muted-foreground animate-pulse">Loading contact form...</div>,
  ssr: false,
});
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';
import { companyInfo } from '@/lib/data';

const contactDetails = [
  { icon: Phone, label: 'Phone', value: companyInfo.phone, href: `tel:${companyInfo.phone}`, color: 'from-blue-400 to-blue-600' },
  { icon: Mail, label: 'Email', value: companyInfo.email, href: `mailto:${companyInfo.email}`, color: 'from-green-400 to-green-600' },
  { icon: Mail, label: 'Enquiries', value: companyInfo.enquiryEmail || 'kormaxaluwyn@gmail.com', href: `mailto:${companyInfo.enquiryEmail || 'kormaxaluwyn@gmail.com'}`, color: 'from-purple-400 to-purple-600' },
  { icon: MapPin, label: 'Address', value: companyInfo.address, href: '#', color: 'from-rose-400 to-rose-600' },
];

const businessHours = [
  { day: 'Monday - Friday', time: companyInfo.businessHours.weekdays },
  { day: 'Saturday', time: companyInfo.businessHours.saturday },
  { day: 'Sunday', time: companyInfo.businessHours.sunday },
];

const quickStats = [
  { icon: Globe, value: '40+', label: 'Countries' },
  { icon: Award, value: '25+', label: 'Years' },
  { icon: Headphones, value: '24/7', label: 'Support' },
  { icon: Shield, value: 'ISO', label: 'Certified' },
];

export default function ContactPage() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-400/20 blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <MessageCircle className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium">Contact Us</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </p>

            {/* Quick Stats */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-wrap justify-center gap-4 mt-10"
            >
              {quickStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <stat.icon className="w-4 h-4 text-accent-400" />
                  <span className="font-bold">{stat.value}</span>
                  <span className="text-white/70 text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Contact Details */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactDetails.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="font-semibold text-primary-600">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-accent-500" />
                  <h3 className="font-bold text-primary-600">Business Hours</h3>
                </div>
                <div className="space-y-2">
                  {businessHours.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.day}</span>
                      <span className={`font-medium ${item.time === 'Closed' ? 'text-red-500' : 'text-primary-600'}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl group"
              >
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Quick Contact CTA */}
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="p-5 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl text-white"
              >
                <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                <p className="text-white/80 text-sm mb-4">Our technical team is available 24/7 for urgent requirements.</p>
                <div className="flex gap-3">
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate="animate"
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-primary-600 mb-2">Send us a Message</h2>
                  <p className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="aspect-[16/5] bg-gradient-to-br from-primary-100 to-gray-100 flex items-center justify-center relative">
                {/* Map Placeholder */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MapPin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-600 mb-2">{companyInfo.name}</h3>
                  <p className="text-gray-600 max-w-lg mx-auto">{companyInfo.address}</p>
                  <p className="text-sm text-gray-500 mt-3">Map integration available on deployment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
