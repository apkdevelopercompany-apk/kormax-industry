'use client';

import { motion } from 'framer-motion';
import { Shield, Headphones, Users, CheckCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { trustBadges } from '@/lib/data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield: Shield,
  Headphones: Headphones,
  Users: Users,
};

export default function TrustBadges() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-r from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {trustBadges.map((badge, index) => {
            const IconComponent = iconMap[badge.icon] || Shield;
            return (
              <motion.div
                key={badge.id}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mx-auto mb-5 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300 shadow-md">
                  <IconComponent className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary-600 mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{badge.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
