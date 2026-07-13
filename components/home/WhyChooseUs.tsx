'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Shield, Award, Clock, HeadphonesIcon, CheckCircle, TrendingUp, Star, Zap, Globe, Truck, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';
import { companyInfo } from '@/lib/data';

const reasons = [
  {
    icon: Shield,
    title: 'Premium Quality Products',
    description:
      'Manufactured using high-quality aluminium and premium raw materials to ensure strength, durability, and long-lasting performance.',
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    icon: Award,
    title: 'Certified Company',
    description:
      'Registered with GST, MSME, ISO Certification, and Trademark, ensuring trust and quality in every product.',
    gradient: 'from-amber-400 to-orange-500'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description:
      'Efficient manufacturing and logistics ensure timely delivery across India and international markets.',
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    icon: HeadphonesIcon,
    title: 'Customer Support',
    description:
      'Our dedicated team provides expert assistance before and after sales for complete customer satisfaction.',
    gradient: 'from-rose-400 to-pink-500'
  },
  {
    icon: FileCheck,
    title: 'Wide Product Range',
    description:
      'Offering 500+ aluminium products including railing systems, profiles, pipes, sheets, rods, bars, extrusions, and glass hardware.',
    gradient: 'from-violet-400 to-purple-500'
  },
  {
    icon: TrendingUp,
    title: 'Trusted Brand',
    description:
      'Serving residential, commercial, and architectural projects with innovative aluminium solutions since 2016.',
    gradient: 'from-cyan-400 to-sky-500'
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative section-padding bg-gradient-to-br from-primary-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-5"
            >
              <Star className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-700">Why Choose Us</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-6 leading-tight">
              Your Trusted Partner for Premium Aluminium Solutions
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              KORMAX Aluwyn Extrusions is a trusted supplier of premium aluminium glass railing systems, aluminium profiles, modular hardware, architectural products, aluminium sheets, rods, pipes, extrusions, and glass hardware. Since 2016, we have been delivering premium aluminium solutions across India and global markets with a commitment to quality, innovation, and customer satisfaction.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  value: '500+',
                  label: 'Products',
                  icon: Award,
                },
                {
                  value: '10K+',
                  label: 'Happy Customers',
                  icon: HeadphonesIcon,
                },
                {
                  value: '2016',
                  label: 'Since',
                  icon: Globe,
                },
                {
                  value: 'Fast',
                  label: 'Delivery',
                  icon: Truck,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <stat.icon className="w-8 h-8 text-accent-500 mb-3" />
                  <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Trust Features */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                'Premium Quality',
                'ISO Certified',
                'Fast Delivery',
                'Customer Satisfaction'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3.5 py-1.5 bg-accent-500/10 border border-accent-500/20 rounded-full shadow-sm hover:bg-accent-500/15 transition-all duration-300">
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  <span className="text-sm font-semibold text-accent-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild className="btn-accent">
              <Link href="/quality">
                View Quality Assurance
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Reasons Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-primary-600 mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
