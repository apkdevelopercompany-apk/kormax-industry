'use client';

import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, FileCheck, BadgeCheck, Settings, Target, Users, Star, Zap } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';
import { companyInfo } from '@/lib/data';

const certifications = [
  { icon: Shield, name: 'ISO 9001:2015', desc: 'Quality Management System', gradient: 'from-emerald-400 to-teal-500' },
  { icon: Award, name: 'ISO 14001:2015', desc: 'Environmental Management', gradient: 'from-blue-400 to-indigo-500' },
  { icon: BadgeCheck, name: 'OHSAS 18001', desc: 'Health & Safety Management', gradient: 'from-amber-400 to-orange-500' },
  { icon: FileCheck, name: 'PED Certified', desc: 'Pressure Equipment Directive', gradient: 'from-rose-400 to-pink-500' },
];

const qualityFeatures = [
  { label: 'PMI Testing', value: '100%', desc: 'Positive Material Identification' },
  { label: 'Radiography', value: 'Full', desc: '100% Radiographic Testing' },
  { label: 'Certifications', value: 'MTC', desc: 'EN 10204 3.1/3.2 Reports' },
  { label: 'Traceability', value: 'Complete', desc: 'Full Material Traceability' },
  { label: 'Testing', value: 'Third Party', desc: 'Independent Inspection' },
  { label: 'Support', value: '24/7', desc: 'Technical Team Available' },
];

export default function CertificatesSection() {
  return (
    <section className="relative section-padding bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-5"
          >
            <Shield className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-semibold text-accent-700">Certifications</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-5">
            Quality You Can Trust
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Our commitment to quality is backed by internationally recognized certifications and rigorous testing standards.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary-600 mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-500">{cert.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Features Bar */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-3xl p-8 lg:p-10 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
            {qualityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="text-3xl lg:text-4xl font-bold text-accent-400 mb-1">{feature.value}</div>
                <div className="text-sm font-semibold mb-1">{feature.label}</div>
                <div className="text-xs text-white/70">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testing Info */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-50 rounded-2xl">
            {['Chemical Analysis', 'Mechanical Testing', 'Ultrasonic Testing', 'Hardness Testing', 'Impact Testing'].map((test, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm">
                <Zap className="w-4 h-4 text-accent-500" />
                <span className="text-sm font-medium text-gray-700">{test}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
