'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Linkedin, Facebook, ArrowUpRight, Shield, Award, Globe, Clock, MessageCircle } from 'lucide-react';
import { companyInfo, products } from '@/lib/data';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Quality Policy', href: '/quality' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = products.map((p) => ({
  label: p.name,
  href: `/products/${p.slug}`,
}));

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary-700 to-primary-800 text-white border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center gap-3 group mb-4 inline-flex">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/10">
                    <span className="text-white font-bold text-xl tracking-tight">KAE</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center border border-primary-700">
                    <span className="text-white text-[8px] font-bold">✓</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-white tracking-tight leading-tight group-hover:text-accent-400 transition-colors duration-300">
                    Kormax
                  </span>
                  <span className="text-xs text-white/60 tracking-wider">
                    ALUWYN EXTRUSIONS
                  </span>
                </div>
              </Link>

              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                {companyInfo.description}
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-wrap gap-2.5"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs transition-colors duration-300">
                <Shield className="w-3.5 h-3.5 text-accent-400 flex-shrink-0" />
                <span className="text-white/80 font-medium">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs transition-colors duration-300">
                <Award className="w-3.5 h-3.5 text-accent-400 flex-shrink-0" />
                <span className="text-white/80 font-medium">500+ Products</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs transition-colors duration-300">
                <Globe className="w-3.5 h-3.5 text-accent-400 flex-shrink-0" />
                <span className="text-white/80 font-medium">10,000+ Happy Customers</span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex gap-3"
            >
              {[
                { icon: Linkedin, href: companyInfo.socialLinks.linkedin, label: 'LinkedIn' },
                { icon: Facebook, href: companyInfo.socialLinks.facebook, label: 'Facebook' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-accent-500 border border-white/10 hover:border-accent-500 transition-all duration-300 flex items-center justify-center group shadow-md hover:shadow-accent/20"
                >
                  <social.icon className="w-5 h-5 text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-semibold text-white text-lg mb-6 relative pb-2 inline-block"
            >
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent-500 rounded-full"></span>
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 transition-colors text-sm flex items-center gap-1 group/link"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-semibold text-white text-lg mb-6 relative pb-2 inline-block"
            >
              Our Products
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent-500 rounded-full"></span>
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3"
            >
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-400 transition-colors text-sm flex items-start gap-1 group/link"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300 flex-shrink-0" />
                    <span className="group-hover/link:translate-x-0.5 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-semibold text-white text-lg mb-6 relative pb-2 inline-block"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent-500 rounded-full"></span>
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-4 text-sm"
              >
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-start gap-3 text-white/80 hover:text-accent-400 transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-1 text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{companyInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-white/80 hover:text-accent-400 transition-colors group"
                >
                  <Mail className="w-4 h-4 mt-1 text-accent-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">{companyInfo.email}</span>
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin className="w-4 h-4 mt-1 text-accent-400 flex-shrink-0" />
                  <span>{companyInfo.address}</span>
                </div>
                <div className="flex items-start gap-3 text-white/80">
                  <Clock className="w-4 h-4 mt-1 text-accent-400 flex-shrink-0" />
                  <div>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-xs text-white/50 mt-0.5">Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 animate-pulse" />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} {companyInfo.name}. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="hover:text-accent-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-accent-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-accent-400 transition-colors duration-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
