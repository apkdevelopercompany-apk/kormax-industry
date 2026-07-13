// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Quality Policy',
//   description: 'Our ISO 9001:2015 certified quality management system ensures every product meets international standards. Learn about our testing and certification processes.',
//   keywords: ['quality management', 'ISO certification', 'material testing', 'PMI testing', 'radiography testing'],
//   openGraph: {
//     title: 'Quality Policy | PrimeMetal Industries',
//     description: 'ISO certified quality management and testing processes.',
//     url: 'https://primemetal.com/quality',
//   },
// };

// export default function QualityLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Policy',

  description:
    'At KORMAX, we are committed to delivering premium aluminium railing systems and architectural hardware through precision manufacturing, quality materials, innovative designs, and consistent craftsmanship for residential and commercial projects.',

  keywords: [
    'KORMAX Quality',
    'Quality Policy',
    'Premium Aluminium Products',
    'Aluminium Railing Systems',
    'Architectural Hardware',
    'Precision Manufacturing',
    'Quality Aluminium Profiles',
    'Glass Railing Systems',
    'Durable Aluminium Products',
    'Modern Construction Solutions'
  ],

  alternates: {
    canonical: '/quality',
  },

  openGraph: {
    title: 'Quality Policy | KORMAX',

    description:
      'Learn about KORMAX commitment to quality manufacturing, premium aluminium products, and reliable architectural hardware solutions.',

    url: 'https://www.kormax.com/quality', // Replace with your actual domain
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}