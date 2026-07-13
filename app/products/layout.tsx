// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Products',
//   description: 'Explore our comprehensive range of premium stainless steel, carbon steel, copper, brass, aluminium, nickel alloys, monel, inconel, and hastelloy products.',
//   keywords: ['stainless steel pipes', 'carbon steel tubes', 'copper busbars', 'nickel alloys', 'inconel products', 'hastelloy materials'],
//   openGraph: {
//     title: 'Premium Metal Products | PrimeMetal Industries',
//     description: 'Explore our comprehensive range of premium ferrous and non-ferrous metal products.',
//     url: 'https://primemetal.com/products',
//   },
// };

// export default function ProductsLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',

  description:
    'Explore KORMAX premium product range including Aluminium Continuous Bottom Profiles, Aluminium Hand Rails, Profile Brackets, Balcony Brackets, Staircase Brackets, Gate & Wall Profiles, Steel Glass Railing Brackets, Steel Pipes, Glass Door Patch Fittings, and Invisible Grill Accessories for modern architectural and construction projects.',

  keywords: [
    'KORMAX Products',
    'Aluminium Railing Systems',
    'Aluminium Continuous Bottom Profile',
    'Aluminium Profile Bracket',
    'Aluminium Hand Rail',
    'Aluminium Plain Hand Rail',
    'Aluminium Balcony Bracket',
    'Aluminium Staircase Bracket',
    'Aluminium Railing Accessories',
    'Gate & Wall Profile',
    'Steel Glass Railing Bracket',
    'Steel Pipe',
    'Glass Door Patch Fittings',
    'Invisible Grill Accessories',
    'Architectural Hardware',
    'Frameless Glass Railing',
    'Glass Railing Systems',
    'Aluminium Profiles',
    'Modern Railing Solutions',
    'Premium Aluminium Products'
  ],

  openGraph: {
    title:
      'Premium Aluminium Railing Systems & Architectural Hardware | KORMAX',

    description:
      'Discover KORMAX premium aluminium railing systems, hand rails, profile brackets, balcony brackets, glass door patch fittings, gate & wall profiles, steel glass railing brackets, and invisible grill accessories.',

    url: 'https://www.kormax.com/products', // Replace with your actual domain

    type: 'website',
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}