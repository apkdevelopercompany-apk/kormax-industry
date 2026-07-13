// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'About Us',
//   description: 'Learn about PrimeMetal Industries - 25+ years of excellence in manufacturing and supplying premium metal products to 40+ countries worldwide.',
//   keywords: ['metal manufacturer', 'industrial supplier', 'ISO certified company', 'metal industry history'],
//   openGraph: {
//     title: 'About PrimeMetal Industries',
//     description: '25+ years of excellence in manufacturing premium metal products.',
//     url: 'https://primemetal.com/about',
//   },
// };

// export default function AboutLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',

  description:
    'Learn about KORMAX, a trusted manufacturer of premium aluminium railing systems, architectural profiles, glass door patch fittings, steel glass railing brackets, and innovative hardware solutions for residential and commercial projects.',

  keywords: [
    'About KORMAX',
    'Aluminium Railing Manufacturer',
    'Architectural Hardware',
    'Glass Railing Systems',
    'Aluminium Profiles',
    'Premium Aluminium Products',
    'Glass Door Patch Fittings',
    'Steel Glass Brackets',
    'Architectural Solutions',
    'KORMAX India'
  ],

  openGraph: {
    title: 'About KORMAX',

    description:
      'Discover KORMAX and our commitment to manufacturing premium aluminium railing systems, architectural profiles, and innovative hardware solutions for modern construction.',

    url: 'https://www.kormax.in/about', // Replace with your actual domain
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}