'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, ArrowRight, Zap, Shield, Award, Clock, MessageCircle, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/lib/data';
import { fadeInUp } from '@/lib/animations';

const quickFeatures = [
  { icon: Zap, text: 'Quick Response' },
  { icon: Shield, text: 'Quality Products' },
  { icon: Clock, text: 'Timely Delivery' },
  { icon: FileText, text: 'Full Documentation' },
];

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-primary-700 via-primary-800 to-primary-900 text-white">
      {/* Decorative Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.95, 1.1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary-400/15 blur-[120px]"
        />
      </div>

      {/* Grid Pattern Overlay with Center Fade */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 0v40H0V0h40zm0 40v40H40V40h40zM0 40v40H0V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          maskImage: 'radial-gradient(circle, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle, black, transparent 80%)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Central Card */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative bg-white/[0.02] backdrop-blur-xl border border-white/[0.07] rounded-3xl p-8 md:p-14 text-center shadow-2xl overflow-hidden mb-12"
          >
            {/* Subtle glow border highlight inside card */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-primary-500/5 pointer-events-none" />

            {/* Sub-badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.06] border border-white/10 rounded-full mb-6 shadow-inner"
            >
              <Award className="w-4 h-4 text-accent-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-white/95">Ready to Get Started?</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight max-w-3xl mx-auto">
              Looking for Reliable
              <span className="block bg-gradient-to-r from-accent-400 via-accent-300 to-white bg-clip-text text-transparent mt-2">
                Metal Solutions?
              </span>
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact our team today for premium quality metal products, competitive pricing, and exceptional service. We are ready to support your custom engineering and design requirements.
            </p>

            {/* Quick Features List */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
              {quickFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2.5 px-4 py-2 bg-white/[0.04] border border-white/[0.06] rounded-xl text-sm hover:bg-white/[0.08] transition-colors duration-300"
                >
                  <feature.icon className="w-4 h-4 text-accent-400" />
                  <span className="font-semibold text-white/90">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-6 rounded-xl font-bold group shadow-[0_4px_20px_rgba(245,131,31,0.25)] hover:shadow-[0_8px_30px_rgba(245,131,31,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-6 rounded-xl font-bold bg-transparent transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <Link href="/products">
                  Browse Products
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Contact Methods Cards */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Phone Card */}
            <a
              href={`tel:${companyInfo.phone}`}
              className="group flex items-center gap-4 p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-black/10"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/30 text-accent-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-white/50 font-semibold uppercase tracking-wider">Call Us</p>
                <p className="font-bold text-base text-white group-hover:text-accent-300 transition-colors duration-300 truncate">{companyInfo.phone}</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${companyInfo.email}`}
              className="group flex items-center gap-4 p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-black/10"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-300/10 border border-primary-300/30 text-primary-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-white/50 font-semibold uppercase tracking-wider">Email Us</p>
                <p className="font-bold text-base text-white group-hover:text-accent-300 transition-colors duration-300 truncate">{companyInfo.email}</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-black/10"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-white/50 font-semibold uppercase tracking-wider">WhatsApp</p>
                <p className="font-bold text-base text-white group-hover:text-accent-300 transition-colors duration-300 truncate">{companyInfo.whatsapp}</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
