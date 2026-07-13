'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Eye, ZoomIn } from 'lucide-react';
import { galleryItems } from '@/lib/data';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function GallerySection() {
  const previewItems = galleryItems.slice(0, 8);

  return (
    <section className="relative section-padding bg-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-60 h-60 bg-accent-100 rounded-full blur-3xl opacity-40" />

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
            <Eye className="w-4 h-4 text-accent-600" />
            <span className="text-sm font-semibold text-accent-700">Our Gallery</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-5">
            Product Showcase
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore our diverse range of premium metal products through our comprehensive gallery.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ scale: 1.03 }}
              className={`group relative overflow-hidden rounded-2xl ${
                index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/3]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-700/90 via-primary-700/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ZoomIn className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70 mt-1">{item.description}</p>
                </div>
              </div>

              {/* Static Category Badge */}
              <div className="absolute top-3 left-3 opacity-100 group-hover:opacity-0 transition-opacity">
                <span className="px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-xs font-semibold text-primary-600 shadow-sm">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all group shadow-lg hover:shadow-xl"
          >
            View Full Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
