'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Award, Users, Globe, Shield, Target, History, Factory, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo, industries } from '@/lib/data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '@/lib/animations';

const milestones = [

  {
    year: "01",
    title: "Product Design",
    description: "Every product begins with precision engineering and innovative design."
  },

  {
    year: "02",
    title: "Manufacturing",
    description: "Premium aluminium profiles are manufactured using advanced production techniques."
  },

  {
    year: "03",
    title: "Quality Inspection",
    description: "Each product undergoes dimensional and quality inspection before dispatch."
  },

  {
    year: "04",
    title: "Surface Finishing",
    description: "Products are available in Powder Coating, Anodized, Wooden Finish and Mill Finish."
  },

  {
    year: "05",
    title: "Packaging",
    description: "Products are securely packed to ensure safe transportation."

  },

  {
    year: "06",
    title: "Customer Satisfaction",

    description: "Delivering reliable architectural solutions for modern construction projects."

  }

];

const values = [
  { icon: Shield, title: 'Quality First', description: 'Uncompromising commitment to quality in every product' },
  { icon: Users, title: 'Customer Focus', description: 'Building lasting relationships through exceptional service' },
  { icon: Target, title: 'Innovation', description: 'Continuously improving products and processes' },
  { icon: Globe, title: 'Integrity', description: 'Transparent and ethical business practices' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About KORMAX
            </h1>

            <p className="text-lg md:text-xl text-white/80">
              Delivering premium aluminium railing systems and architectural hardware solutions designed for modern residential and commercial projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <motion.div
              variants={fadeInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AboutUs/AboutUs.jpg"
                  alt="PrimeMetal Industries Facility"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-accent-500 text-white rounded-2xl p-6 shadow-xl"
              >
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              variants={fadeInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-4">
                <Factory className="w-4 h-4 text-accent-600" />
                <span className="text-sm font-medium text-accent-700">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
                Premium Aluminium Railing & Architectural Hardware Solutions
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {companyInfo.description}
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                KORMAX specializes in manufacturing premium aluminium railing systems, architectural profiles, hand rails, balcony brackets, staircase brackets, glass door patch fittings, steel glass railing brackets, and invisible grill accessories.Our products are engineered to combine durability, safety, precision, and modern architectural aesthetics, making them suitable for residential, commercial, hospitality, and infrastructure projects.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    value: "12+",
                    label: "Product Categories"
                  },

                  {
                    value: "150+",
                    label: "Product Models"
                  },

                  {
                    value: "Premium",
                    label: "Quality Materials"
                  },

                  {
                    value: "Modern",
                    label: "Architectural Solutions"
                  },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">Our Core Values</h2>
            <p className="section-subtitle">
              The principles that guide our operations and define our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 group-hover:bg-accent-500 flex items-center justify-center mb-4 transition-colors">
                  <value.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-primary-600 mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100 rounded-full mb-4">
              <History className="w-4 h-4 text-accent-600" />
              <span className="text-sm font-medium text-accent-700">Our Journey</span>
            </div>
            <h2 className="section-title mb-4">Milestones & Achievements</h2>
            <p className="section-subtitle">
              A timeline of growth, innovation, and excellence over the years.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                variants={staggerItem}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {milestone.year.slice(-2)}
                  </div>
                  {idx < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-accent-200 mt-2" />
                  )}
                </div>
                <div className="bg-gray-50 rounded-xl p-5 flex-1">
                  <div className="text-sm text-accent-600 font-medium mb-1">{milestone.year}</div>
                  <h3 className="font-bold text-primary-600 mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Join hundreds of satisfied clients who trust PrimeMetal Industries for their metal requirements.
            </p>
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
