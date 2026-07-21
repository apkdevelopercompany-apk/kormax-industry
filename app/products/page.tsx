'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye } from 'lucide-react';
import { products } from '@/lib/data';
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function ProductsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-[100px]"
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
              <span className="w-2 h-2 bg-accent-400 rounded-full" />
              <span className="text-sm font-medium">Premium Metal Products</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 max-w-2xl mx-auto">
              Explore KORMAX's premium range of aluminium railing systems, architectural profiles, glass door patch fittings, steel glass railing brackets, and innovative hardware solutions designed for modern residential and commercial projects.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <span className="font-bold text-accent-400">500+</span>
                <span className="text-white/80">Products</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <span className="font-bold text-accent-400">40+</span>
                <span className="text-white/80">Countries</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <span className="font-bold text-accent-400">ISO</span>
                <span className="text-white/80">Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Products Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-700/90 via-primary-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary-600 mb-2 group-hover:text-accent-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Product Finishes */}
                  {product.specifications['Surface Finish'] && (
                    <div className="mb-4">
                      <p className="text-xs text-gray-400 mb-1.5">Available Finishes:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.specifications['Surface Finish']?.split(',').slice(0, 3).map((finish: string, idx: number) => (
                          <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                            {finish.trim()}
                          </span>
                        ))}
                        {product.specifications['Surface Finish']?.split(',').length > 3 && (
                          <span className="px-2 py-0.5 bg-accent-500/10 text-accent-600 rounded text-xs font-medium">
                            +more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-2 text-accent-600 font-semibold text-sm hover:gap-3 transition-all group/link"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-14 text-center p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl text-white"
          >
            <h3 className="text-2xl font-bold mb-3">Need Custom Specifications?</h3>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              We can supply materials in custom sizes, grades, and specifications. Contact our team for your specific requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
