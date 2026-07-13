'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronDown, MapPin, Clock } from 'lucide-react';
import { navigationItems, companyInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';

const productCategories = [
  {
    name: 'Aluminium Continuous Bottom Profile',
    href: '/products/aluminium-continuous-bottom-profile',
  },
  {
    name: 'Aluminium Profile Bracket',
    href: '/products/aluminium-profile-bracket',
  },
  {
    name: 'Aluminium Hand Rail',
    href: '/products/aluminium-hand-rail',
  },
  {
    name: 'Aluminium Plain Hand Rail',
    href: '/products/aluminium-plain-hand-rail',
  },
  {
    name: 'Aluminium Balcony Bracket',
    href: '/products/aluminium-balcony-bracket',
  },
  {
    name: 'Aluminium Staircase & Balcony Bracket',
    href: '/products/aluminium-staircase-balcony-bracket',
  },
  {
    name: 'Aluminium Railing Accessories',
    href: '/products/aluminium-railing-accessories',
  },
  {
    name: 'Gate & Wall Profile',
    href: '/products/gate-wall-profile',
  },
  {
    name: 'Steel Glass Railing Bracket',
    href: '/products/steel-glass-railing-bracket',
  },
  {
    name: 'Steel Pipe',
    href: '/products/steel-pipe',
  },
  {
    name: 'Glass Door Patch Fittings',
    href: '/products/glass-door-patch-fittings',
  },
  {
    name: 'Invisible Grill Accessories',
    href: '/products/invisible-grill-accessories',
  },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary-700 text-white text-sm border-b border-primary-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-6">
              <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 hover:text-accent-400 transition-colors group">
                <Phone className="w-3.5 h-3.5 text-accent-400" />
                <span>{companyInfo.phone}</span>
              </a>
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-accent-400 transition-colors group">
                <Mail className="w-3.5 h-3.5 text-accent-400" />
                <span>{companyInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin className="w-3.5 h-3.5" />
                <span> Odhav Ahmedabad - 382415</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded text-xs font-medium">
                  ISO Certificate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`z-50 transition-all duration-300 ${isScrolled
          ? 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-1 lg:py-2 border-b border-gray-100 text-gray-900'
          : 'bg-white/95 text-black'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18 lg:h-22">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-xl lg:text-2xl tracking-tight">KAE</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">✓</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl lg:text-2xl leading-tight tracking-tight ${isScrolled ? 'text-primary-600' : 'text-primary-600'}`}>
                  Kormax
                </span>
                <span className={`text-xs tracking-wide ${isScrolled ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
                  INDUSTRIES
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.label === 'Products' && setActiveDropdown('products')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors relative group flex items-center gap-1 ${isScrolled ? 'text-foreground hover:text-primary-600' : 'text-foreground hover:text-primary-600'
                      }`}
                  >
                    {item.label}
                    {item.label === 'Products' && (
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </Link>

                  {/* Products Dropdown */}
                  {item.label === 'Products' && (
                    <AnimatePresence>
                      {activeDropdown === 'products' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 mt-1 z-50 text-gray-900"
                        >
                          {productCategories.map((cat, idx) => (
                            <Link
                              key={cat.href}
                              href={cat.href}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                            >
                              <div className="w-2 h-2 rounded-full bg-accent-500 group-hover:scale-150 transition-transform" />
                              <span className="text-sm text-foreground group-hover:text-primary-600 transition-colors">
                                {cat.name}
                              </span>
                            </Link>
                          ))}
                          <div className="border-t mt-2 pt-2">
                            <Link
                              href="/products"
                              className="flex items-center justify-between px-4 py-2.5 text-accent-600 font-medium text-sm hover:bg-accent-50 transition-colors"
                            >
                              View All Products
                              <span>→</span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className={`flex items-center gap-2 px-4 py-2 font-medium rounded-lg transition-colors ${isScrolled ? 'text-primary-600 hover:bg-primary-50' : 'text-white hover:bg-white/10'
                  }`}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{companyInfo.phone}</span>
              </a>
              <Button asChild className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-primary-600 hover:bg-primary-50' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-4">
                {navigationItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 text-base font-medium text-foreground hover:text-primary-600 hover:bg-primary-50 px-4 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.05 }}
                  className="mt-4 px-4 space-y-3"
                >
                  <a
                    href={`tel:${companyInfo.phone}`}
                    className="flex items-center gap-2 text-primary-600 font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{companyInfo.phone}</span>
                  </a>
                  <Button asChild className="w-full bg-accent-500 hover:bg-accent-600">
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
