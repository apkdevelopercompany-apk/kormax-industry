'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Shield, Award, Globe, Package, CheckCircle, Users, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/lib/data';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

const stats = [
  { icon: Award, value: "Premium", label: "Quality Products", color: 'from-amber-400 to-orange-500' },
  { icon: Shield, value: "150+", label: "Product Models", color: 'from-blue-400 to-indigo-500' },
  { icon: Globe, value: "Modern", label: "Architectural Solutions", color: 'from-emerald-400 to-teal-500' },
  { icon: Package, value: "12+", label: "Product Categories", color: 'from-rose-400 to-pink-500' },
];

const productTypes = [
  'Bottom Profiles',
  'Hand Rails',
  'Profile Brackets',
  'Balcony Brackets',
  'Staircase Brackets',
  'Glass Door Patch',
  'Steel Glass Brackets',
  'Invisible Grill'
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-500/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full bg-primary-400/30 blur-[120px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 0v40H0V0h40zm40 40v40H40V40h40zm0-40v40H40V0h40zM0 40v40H0V40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            x1="0" y1="100%" x2="100%" y2="0"
            strokeWidth="1"
            stroke="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 bg-green-400 rounded-full"
              />
              <span className="text-sm font-medium">Innovative Aluminium Solutions</span>
              <Shield className="w-4 h-4 text-accent-400" />
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            >
              Premium Aluminium
              <span className="block text-accent-400 mt-2">Railing Systems</span>
              <span className="block mt-1">& Architectural Hardware</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/85 mb-6 max-w-xl leading-relaxed"
            >
              Discover premium aluminium railing systems, hand rails, profile brackets,
              glass door patch fittings, steel glass railing brackets, and architectural
              hardware solutions designed for modern residential and commercial projects.
            </motion.p>
            {/* Product Types Pills */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.15 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {productTypes.map((type, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/10 hover:bg-white/20 transition-colors cursor-default"
                >
                  {type}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-6 text-lg font-semibold group shadow-xl hover:shadow-2xl transition-all">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold bg-transparent backdrop-blur-sm">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.25 }}
              className="flex flex-wrap items-center gap-6 text-sm text-white/70"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Quality Assured</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>Timely Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>100% Tested</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Hero Visual */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate="animate"
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Image Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Premium Aluminium Railing Systems"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-700/60 via-transparent to-transparent" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center">
                        <Package className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Products Range</p>
                        <p className="text-2xl font-bold text-primary-700">12+ Categories</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 1 */}
              {/* <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="absolute -bottom-4 -left-8 bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
                    <Globe className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Modern</p>
                    <p className="text-xl font-bold text-primary-700">Design Systems</p>
                  </div>
                </div>
              </motion.div> */}

              {/* Floating Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                    <Award className="w-7 h-7 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Industry Leader</p>
                    <p className="text-xl font-bold text-primary-700">Since 2016</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Ring */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-accent-400/30 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="text-center lg:text-left group"
              >
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-3xl lg:text-4xl font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-sm text-white/70">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
