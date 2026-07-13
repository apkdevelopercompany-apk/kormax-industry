// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Contact Us',
//   description: 'Contact PrimeMetal Industries for premium metal products. Get a quote, inquire about products, or reach our support team 24/7.',
//   keywords: ['contact metal supplier', 'industrial inquiry', 'metal quote', 'manufacturer contact'],
//   openGraph: {
//     title: 'Contact PrimeMetal Industries',
//     description: 'Get in touch with our team for premium metal products.',
//     url: 'https://primemetal.com/contact',
//   },
// };

// export default function ContactLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',

  description:
    'Get in touch with KORMAX for premium aluminium railing systems, architectural profiles, glass door patch fittings, steel glass railing brackets, and custom product inquiries. Our team is ready to assist you with your project requirements.',

  keywords: [
    'Contact KORMAX',
    'Aluminium Railing Manufacturer',
    'Glass Railing Supplier',
    'Architectural Hardware Contact',
    'Glass Door Patch Fittings',
    'Steel Glass Bracket',
    'Aluminium Profiles',
    'Request Quote',
    'Product Inquiry',
    'KORMAX Contact'
  ],

  openGraph: {
    title: 'Contact KORMAX',

    description:
      'Contact KORMAX for product inquiries, quotations, and expert support for aluminium railing systems, architectural profiles, and premium hardware solutions.',

    url: 'https://www.kormax.in/contact', // Replace with your actual domain
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}