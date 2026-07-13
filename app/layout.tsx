// // @ts-ignore: Allow importing global CSS without type declarations
// import './globals.css';
// import type { Metadata } from 'next';
// import Header from '@/components/layout/Header';
// import Footer from '@/components/layout/Footer';
// import { Toaster } from '@/components/ui/toaster';

// export const metadata: Metadata = {
//   title: {
//     default: 'PrimeMetal Industries | Premium Metal Products & Alloys',
//     template: '%s | PrimeMetal Industries',
//   },
//   description: 'Leading manufacturer and supplier of premium stainless steel, carbon steel, copper, brass, nickel alloys, monel, inconel, and hastelloy products for industrial applications.',
//   keywords: ['stainless steel', 'carbon steel', 'nickel alloys', 'inconel', 'hastelloy', 'monel', 'copper nickel', 'metal supplier', 'industrial metals'],
//   authors: [{ name: 'PrimeMetal Industries' }],
//   creator: 'PrimeMetal Industries',
//   publisher: 'PrimeMetal Industries',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
//   metadataBase: new URL('https://primemetal.com'),
//   alternates: {
//     canonical: '/',
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://primemetal.com',
//     siteName: 'PrimeMetal Industries',
//     title: 'PrimeMetal Industries | Premium Metal Products & Alloys',
//     description: 'Leading manufacturer and supplier of premium stainless steel, carbon steel, copper, brass, nickel alloys for industrial applications.',
//     images: [
//       {
//         url: '/og-image.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'PrimeMetal Industries',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'PrimeMetal Industries | Premium Metal Products',
//     description: 'Leading manufacturer of premium metal products and alloys.',
//     images: ['/og-image.jpg'],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       'max-video-preview': -1,
//       'max-image-preview': 'large',
//       'max-snippet': -1,
//     },
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="scroll-smooth">
//       <body className="antialiased">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//         <Toaster />
//       </body>
//     </html>
//   );
// }

// @ts-ignore: Allow importing global CSS without type declarations
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'KORMAX | Premium Aluminium Railing Systems & Architectural Hardware',
    template: '%s | KORMAX',
  },

  description:
    'KORMAX is a leading manufacturer of premium aluminium railing systems, hand rails, balcony brackets, glass door patch fittings, steel glass railing brackets, gate & wall profiles, and invisible grill accessories for residential, commercial, and architectural projects.',

  keywords: [
    'KORMAX',
    'Aluminium Railing Systems',
    'Aluminium Hand Rail',
    'Continuous Bottom Profile',
    'Aluminium Profile Bracket',
    'Balcony Bracket',
    'Staircase Bracket',
    'Glass Door Patch Fittings',
    'Steel Glass Railing Bracket',
    'Steel Pipe',
    'Gate & Wall Profile',
    'Invisible Grill Accessories',
    'Architectural Hardware',
    'Glass Railing System',
    'Frameless Glass Railing',
    'Aluminium Profiles',
  ],

  authors: [
    {
      name: 'KORMAX',
    },
  ],

  creator: 'KORMAX',

  publisher: 'KORMAX',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL('https://www.kormax.com'), // Change if domain is different

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IND',

    url: 'https://www.kormax.com',

    siteName: 'KORMAX',

    title:
      'KORMAX | Premium Aluminium Railing Systems & Architectural Hardware',

    description:
      'Manufacturer of premium aluminium railing systems, glass railing profiles, balcony brackets, hand rails, gate & wall profiles, glass door patch fittings, and invisible grill accessories.',

    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KORMAX Aluminium Railing Systems',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'KORMAX | Premium Aluminium Railing Systems',

    description:
      'Premium manufacturer of aluminium railing systems, architectural profiles, glass door hardware, and invisible grill accessories.',

    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <Toaster />
      </body>
    </html>
  );
}