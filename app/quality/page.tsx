'use client';

import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, FileText, BadgeCheck, Settings, Target, Users } from 'lucide-react';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';
import { companyInfo } from '@/lib/data';

const certifications = [
  { icon: Shield, name: 'ISO 9001:2015', description: 'Quality Management System' },
  { icon: Award, name: 'ISO 14001:2015', description: 'Environmental Management System' },
  { icon: BadgeCheck, name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
  { icon: FileText, name: 'PED Certified', description: 'Pressure Equipment Directive' },
];

const qualityProcess = [
  { step: '01', title: 'Raw Material Testing', description: 'All incoming materials undergo PMI testing and chemical analysis to verify grade compliance.' },
  { step: '02', title: 'In-Process Inspection', description: 'Continuous monitoring at every manufacturing stage ensures dimensional accuracy.' },
  { step: '03', title: 'Final Testing', description: 'Complete radiography, ultrasonic, and hydrostatic testing for finished products.' },
  { step: '04', title: 'Documentation', description: 'Mill Test Certificates (MTC), EN 10204 3.1/3.2 reports provided with every shipment.' },
];

const qualityFeatures = [
  { icon: CheckCircle, title: 'PMI Testing', description: 'Positive Material Identification for grade verification' },
  { icon: CheckCircle, title: 'Radiographic Testing', description: '100% radiography for critical applications' },
  { icon: CheckCircle, title: 'Ultrasonic Testing', description: 'Non-destructive testing for internal defects' },
  { icon: CheckCircle, title: 'Chemical Analysis', description: 'Spectrometric analysis for composition verification' },
  { icon: CheckCircle, title: 'Mechanical Testing', description: 'Tensile, hardness, and impact testing' },
  { icon: CheckCircle, title: 'Dimensional Checks', description: 'Precise measurement verification' },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Shield className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium">Quality You Can Trust</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Quality Policy
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Our unwavering commitment to quality is backed by international certifications, rigorous testing protocols, and complete traceability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-4">
                <Target className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-medium text-accent-700">Our Commitment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
                Excellence Through Quality
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At PrimeMetal Industries, quality is not just a standard - it&apos;s the foundation of everything we do. Our comprehensive quality management system ensures every product meets or exceeds international specifications.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We maintain full traceability from raw material sourcing to final delivery, with detailed documentation including Mill Test Certificates (MTC), radiography reports, and third-party inspection records available for every shipment.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-accent-500">100%</div>
                  <div className="text-xs text-muted-foreground">Material Testing</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-accent-500">ISO</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-accent-500">PMI</div>
                  <div className="text-xs text-muted-foreground">Verified</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/QualityPolicy/quality-policy.jpg"
                  alt="Quality Testing"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Our Certifications</h2>
            <p className="section-subtitle">
              Internationally recognized certifications that validate our commitment to quality.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-primary-100 group-hover:bg-accent-500 flex items-center justify-center mx-auto mb-4 transition-colors">
                  <cert.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-primary-600 mb-1">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Quality Assurance Process</h2>
            <p className="section-subtitle">
              A systematic approach to ensure every product meets your specifications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {qualityProcess.map((step, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 h-full">
                  <div className="text-5xl font-bold text-accent-200 mb-4">{step.step}</div>
                  <h3 className="font-bold text-primary-600 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testing Capabilities</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Comprehensive testing facilities ensure every product meets your exact requirements.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {qualityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-white/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
