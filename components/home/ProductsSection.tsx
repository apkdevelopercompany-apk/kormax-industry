'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations';

export default function ProductsSection() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
            Our{' '}
            <span className="text-accent-500 relative inline-block pb-3">
              Products
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-accent-500 rounded-full" />
            </span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-md hover:shadow-[0_10px_30px_rgba(245,131,31,0.12)] hover:border-accent-500/60 transition-all duration-300"
            >
              <Link href={`/products/${product.slug}`} className="block">
                {/* Product Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Hover Action Overlay */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 bg-accent-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-4 h-4" />
                      View Product
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-accent-500 group-hover:text-accent-600 transition-colors mb-3">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-md mx-auto line-clamp-3">
                    {product.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent-50 hover:bg-accent-600 text-white font-semibold px-8 py-6 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            <Link href="/products" className="inline-flex items-center gap-2">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
