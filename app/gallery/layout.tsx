// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Gallery',
//   description: 'Browse our product gallery showcasing stainless steel, carbon steel, copper, brass, aluminium, nickel alloys and more industrial metal products.',
//   keywords: ['metal products gallery', 'industrial metals', 'pipe images', 'tube photos'],
//   openGraph: {
//     title: 'Product Gallery | PrimeMetal Industries',
//     description: 'Browse our comprehensive product gallery.',
//     url: 'https://primemetal.com/gallery',
//   },
// };

// export default function GalleryLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',

  description:
    'Explore the KORMAX gallery featuring premium aluminium railing systems, hand rails, balcony brackets, staircase brackets, gate & wall profiles, glass door patch fittings, steel glass railing brackets, and architectural hardware solutions.',

  keywords: [
    'KORMAX Gallery',
    'Aluminium Railing Gallery',
    'Glass Railing Systems',
    'Hand Rail Designs',
    'Balcony Brackets',
    'Staircase Brackets',
    'Gate & Wall Profiles',
    'Glass Door Patch Fittings',
    'Steel Glass Railing Brackets',
    'Architectural Hardware',
    'Frameless Glass Railings',
    'Project Gallery'
  ],

  openGraph: {
    title: 'Gallery | KORMAX',

    description:
      'Browse the KORMAX gallery showcasing premium aluminium railing systems, architectural profiles, glass hardware, and modern construction solutions.',

    url: 'https://www.kormax.in/gallery', // Replace with your actual domain
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}