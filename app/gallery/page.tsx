'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ZoomIn, Grid, LayoutGrid } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';
import { galleryItems } from '@/lib/data';

const categories = ['All', 'Pipes', 'Plates', 'Bars', 'Fittings', 'Flanges', 'Wire', 'Electrical', 'Structural', 'Coils'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent-400/20 blur-[100px]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <Eye className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium">Product Gallery</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
              Explore our diverse range of premium metal products through our comprehensive showcase. Quality you can see.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Controls */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="mb-10"
          >
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2.5 rounded-lg transition-all ${viewMode === 'masonry'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-lg transition-all ${viewMode === 'grid'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className={viewMode === 'masonry'
              ? 'columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'
              : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            }
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all break-inside-avoid ${viewMode === 'masonry'
                    ? index % 3 === 0 ? 'aspect-[4/5]' : index % 2 === 0 ? 'aspect-square' : 'aspect-[4/3]'
                    : 'aspect-square'
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-700/95 via-primary-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>

                {/* Static Category Badge */}
                <div className="absolute top-3 left-3 opacity-100 group-hover:opacity-0 transition-opacity">
                  <span className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg text-xs font-semibold text-primary-600 shadow-lg">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No gallery items found.</p>
            </div>
          )}

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: galleryItems.length, label: 'Products Showcased' },
              { value: '10+', label: 'Categories' },
              { value: '100%', label: 'Quality Tested' },
              { value: '40+', label: 'Countries Supplied' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 text-center shadow-lg">
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
