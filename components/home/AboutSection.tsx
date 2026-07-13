'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Award, Target, Users, Globe, Factory, FileText, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/lib/data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';

const highlights = [
  { icon: Shield, text: 'ISO Certified Quality Management', desc: 'ISO 9001:2015 certified' },
  { icon: Award, text: '25+ Years Industry Experience', desc: 'Since 1998' },
  { icon: Target, text: 'Global Export to 40+ Countries', desc: 'Worldwide presence' },
];

const productTypes = [
  'Pipes', 'Tubes', 'Sheets', 'Plates', 'Bars', 'Flanges',
  'Fasteners', 'Fittings', 'Busbars', 'Coils', 'Wires'
];

export default function AboutSection() {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary-100/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1504917543703-8376be78c2dd?w=800&q=80"
                  alt="PrimeMetal Industries Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/40 to-transparent" />
              </motion.div>

              {/* Decorative Border */}
              <div className="absolute -inset-4 -z-10 border-4 border-accent-400/20 rounded-3xl" />

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-4xl font-extrabold">25+</div>
                <div className="text-sm opacity-90 font-medium">Years Experience</div>
              </motion.div>
            </div>

            {/* Secondary Images Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-158109216060d-1c9b8a6c7b9e?w=400&q=80"
                  alt="Quality Testing"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                  alt="Manufacturing"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            variants={fadeInRight}
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
              <Factory className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-semibold text-accent-700">About Our Company</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-6 leading-tight">
              Leading Manufacturer of Premium Metal Products
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              We specialize in manufacturing and supplying a comprehensive range of ferrous and non-ferrous products including pipes, tubes, sheets, plates, bars, flanges, fasteners, and fittings. Our commitment to quality and customer satisfaction has made us a preferred choice for industries worldwide.
            </p>

            {/* Product Types */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-700 mb-3">Products We Supply:</p>
              <div className="flex flex-wrap gap-2">
                {productTypes.map((type, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-accent-100 rounded-lg text-sm font-medium text-gray-700 hover:text-accent-700 transition-colors cursor-default"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center flex-shrink-0 group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300 shadow-sm">
                    <item.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 block">{item.text}</span>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl group shadow-lg hover:shadow-xl transition-all">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
