'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Factory, Shield, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/lib/data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';

const productTypes = [
  'Bottom Profiles',
  'Profile Brackets',
  'Hand Rails',
  'Balcony Brackets',
  'Staircase Brackets',
  'Glass Door Patch Fittings',
  'Steel Glass Brackets',
  'Gate & Wall Profiles',
];

const highlights = [
  { value: '12+', label: 'Product Categories' },
  { value: '150+', label: 'Product Models' },
  { value: 'Premium', label: 'Quality Products' },
  { value: 'Modern', label: 'Architectural Solutions' },
];

export default function CompanyIntro() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-5"
            >
              <Factory className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-700">Premium Architectural Solutions</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-6 leading-tight">
              {companyInfo.name}
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              {companyInfo.fullDescription}
            </p>

            {/* Product Types */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-3">Our Core Product Categories:</p>
              <div className="flex flex-wrap gap-2">
                {productTypes.map((type, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 hover:bg-accent-100 rounded-lg text-sm font-medium text-gray-700 hover:text-accent-700 transition-colors cursor-default"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8"
            >
              {highlights.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <Button asChild className="btn-primary group">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumPlainHandRail/home-main.jpg"
                  alt="KORMAX Premium Aluminium Railing Systems"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/30 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <div>
                    <div className="text-xl font-bold">Premium</div>
                    <div className="text-sm opacity-90">Aluminium Solutions</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-accent-400/30 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
