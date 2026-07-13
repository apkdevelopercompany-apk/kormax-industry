import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import CompanyIntro from '@/components/home/CompanyIntro';
import ProductsSection from '@/components/home/ProductsSection';
import TrustBadges from '@/components/home/TrustBadges';

const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const IndustriesSection = dynamic(() => import('@/components/home/IndustriesSection'));
const CertificatesSection = dynamic(() => import('@/components/home/CertificatesSection'));
const FAQSection = dynamic(() => import('@/components/home/FAQSection'));
const CTASection = dynamic(() => import('@/components/home/CTASection'));

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanyIntro />
      <ProductsSection />
      <TrustBadges />
      <WhyChooseUs />
      <IndustriesSection />
      <CertificatesSection />
      {/* <GallerySection /> */}
      <FAQSection />
      <CTASection />
    </>
  );
}
