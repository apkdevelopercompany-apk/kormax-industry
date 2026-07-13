'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building, Fuel, Ship, Factory, Wrench, Zap, ArrowUpRight } from 'lucide-react';
import { industries } from '@/lib/data';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

const industryIcons = [Fuel, Wrench, Ship, Zap, Building, Factory];

export default function IndustriesSection() {
  return (
    <section className="relative section-padding bg-primary-700 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-accent-500/20 blur-[80px]"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-white/10 blur-[100px]"
        />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-5"
          >
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold">Industries We Serve</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our premium aluminium railing systems, architectural profiles, glass hardware, and aluminium products are trusted across residential, commercial, hospitality, infrastructure, and architectural projects.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, idx) => {
            const Icon = industryIcons[idx] || Factory;
            return (
              <motion.div
                key={industry.id}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/15 transition-all duration-300 border border-white/10"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  {/* <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/80 to-primary-700/50" />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-accent-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{industry.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-6">
            Looking for premium aluminium solutions for your next project?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors group"
          >
            Discuss Your Requirements
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
