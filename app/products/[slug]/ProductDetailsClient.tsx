'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, ChevronLeft, FileText, Shield, Package, X, ChevronRight, ZoomIn } from 'lucide-react';
import { Product } from '@/types';
import { products } from '@/lib/data';
import dynamic from 'next/dynamic';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';

const InquiryForm = dynamic(() => import('@/components/forms/InquiryForm'), {
  loading: () => <div className="p-8 text-center text-muted-foreground animate-pulse">Loading inquiry form...</div>,
  ssr: false,
});

interface ProductDetailsClientProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allGalleryImages = product ? product.gallery : [];

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const prevImage = useCallback(() => {
    setLightboxIndex(i => (i - 1 + allGalleryImages.length) % allGalleryImages.length);
  }, [allGalleryImages.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex(i => (i + 1) % allGalleryImages.length);
  }, [allGalleryImages.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <>
      {/* Product Banner */}
      <section className="relative py-12 lg:py-16 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            {product.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Images */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              animate="animate"
            >
              {/* Main Image with Zoom */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-zoom-in group shadow-md"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Details */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              animate="animate"
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-primary-600 mb-4 tracking-tight">Product Overview</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                {product.fullDescription}
              </p>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:border-accent-500/60 transition-colors flex flex-col items-center justify-center">
                  <Shield className="w-6 h-6 text-accent-500 mb-2" />
                  <span className="text-xs font-bold text-gray-800">ISO Certified</span>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:border-accent-500/60 transition-colors flex flex-col items-center justify-center">
                  <FileText className="w-6 h-6 text-accent-500 mb-2" />
                  <span className="text-xs font-bold text-gray-800">MTC Available</span>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-sm hover:border-accent-500/60 transition-colors flex flex-col items-center justify-center">
                  <Package className="w-6 h-6 text-accent-500 mb-2" />
                  <span className="text-xs font-bold text-gray-800">Custom Sizes</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Product Gallery Section ===== */}
      {allGalleryImages.length > 0 && (
        <section className="py-16 bg-white relative">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
                Our <span className="text-accent-500">Gallery</span>
              </h2>
            </motion.div>

            {/* Gallery Grid - 3 Column Layout */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
            >
              {allGalleryImages.map((img, idx) => {
                // Generate clean caption text from filename
                let cleanTitle = `Image ${idx + 1}`;
                try {
                  const decoded = decodeURIComponent(img);
                  const parts = decoded.split('/');
                  const filename = parts[parts.length - 1];
                  const nameWithoutExt = filename.split('.')[0];
                  const rawTitle = nameWithoutExt.replace(/[-_]/g, ' ').trim();
                  cleanTitle = rawTitle
                    .split(' ')
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ');
                } catch (e) {
                  // Fallback to default
                }

                return (
                  <motion.div
                    key={idx}
                    variants={staggerItem}
                    whileHover={{ y: -6 }}
                    onClick={() => openLightbox(idx)}
                    className="group flex flex-col rounded-2xl overflow-hidden cursor-pointer bg-white border border-gray-200/80 shadow-md hover:shadow-[0_12px_28px_rgba(245,131,31,0.12)] hover:border-accent-500/60 transition-all duration-300"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[4/3] w-full bg-white p-4 flex items-center justify-center overflow-hidden border-b border-gray-100">
                      <Image
                        src={img}
                        alt={`${product.name} - Image ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Hover Overlay with Zoom Icon */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center z-10">
                        <div className="opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 bg-white/95 rounded-full p-3 shadow-lg">
                          <ZoomIn className="w-5 h-5 text-primary-600" />
                        </div>
                      </div>
                    </div>

                    {/* Text Label Area */}
                    <div className="p-4 text-center bg-gray-50 flex items-center justify-center border-t border-gray-50 min-h-[56px]">
                      <span className="text-gray-900 font-bold text-base md:text-lg tracking-wide select-none group-hover:text-accent-500 transition-colors">
                        {cleanTitle}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
              {lightboxIndex + 1} / {allGalleryImages.length}
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center relative h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allGalleryImages[lightboxIndex]}
                alt={`${product.name} - Image ${lightboxIndex + 1}`}
                fill
                priority
                className="object-contain rounded-xl shadow-2xl"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 max-w-2xl overflow-x-auto px-4 z-10">
              {allGalleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                  className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all relative ${idx === lightboxIndex ? 'border-accent-400 opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-80'
                    }`}
                >
                  <Image src={img} alt={`thumb-${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Specifications, Applications & Industries Section */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-150">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left Column: Technical Specifications (7 columns) */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">
                <FileText className="w-5.5 h-5.5 text-accent-500" />
                Technical Specifications
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="px-5 py-4 font-semibold text-primary-600 text-sm w-[35%] bg-gray-50/50 border-r border-gray-100">{key}</td>
                        <td className="px-5 py-4 text-muted-foreground text-sm">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Right Column: Applications & Industries (5 columns) */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-10"
            >
              {/* Applications */}
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">
                  <Check className="w-5.5 h-5.5 text-accent-500" />
                  Applications
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white border border-gray-150 rounded-xl p-3 shadow-sm hover:border-accent-500/40 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-accent-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-accent-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-6 flex items-center gap-2">
                  <Package className="w-5.5 h-5.5 text-accent-500" />
                  Industries Served
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {product.industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white text-gray-800 border border-gray-250 rounded-xl text-sm font-medium shadow-sm hover:border-accent-500/60 transition-colors cursor-default"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request a Quote for {product.name}
              </h2>
              <p className="text-white/80">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 lg:p-8"
            >
              <InquiryForm productName={product.name} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary-600 mb-8"
          >
            Related Products
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {relatedProducts.map((p) => (
              <motion.div
                key={p.id}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary-600 mb-2">{p.name}</h3>
                  <Link href={`/products/${p.slug}`} className="text-sm text-accent-600 hover:underline flex items-center gap-1">
                    View Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
