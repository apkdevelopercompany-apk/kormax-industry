import { Product, Industry, Certificate, GalleryItem, FAQItem, NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  // { label: 'Gallery', href: '/gallery' },
  { label: 'Quality Policy', href: '/quality' },
  { label: 'Contact', href: '/contact' },
];
export const products: Product[] = [
  {
    id: '1',
    slug: 'aluminium-continuous-bottom-profile',

    name: 'Aluminium Continuous Bottom Profile',

    shortDescription:
      'Premium aluminium continuous bottom profiles designed for frameless glass railing systems, delivering exceptional strength, safety, corrosion resistance, and a modern architectural appearance.',

    fullDescription:
      `KORMAX Aluminium Continuous Bottom Profiles are precision-engineered aluminium base channels specifically developed for frameless glass railing applications. Designed to securely hold toughened or laminated glass panels, these profiles provide excellent structural stability while maintaining a clean and elegant appearance.

Manufactured using premium quality aluminium extrusion, these profiles offer superior corrosion resistance, lightweight construction, and long service life. Available in multiple profile designs (KM-1001 to KM-1022), they support various installation methods and glass thicknesses, making them suitable for balconies, staircases, terraces, commercial buildings, residential projects, and architectural glazing systems.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/home_main.png',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-105.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-106.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-107.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-108.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1005.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1006.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1007.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1008.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1011.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1012.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1013.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1014.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1015.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1016.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1017.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1018.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1019.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1020.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1021.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/KM-1022.png',
    ],

    applications: [
      'Frameless Glass Railings',
      'Balcony Railings',
      'Staircase Railings',
      'Terrace Glass Railings',
      'Commercial Buildings',
      'Residential Buildings',
      'Office Interiors',
      'Shopping Malls',
      'Hotels & Resorts',
      'Architectural Glass Systems'
    ],

    features: [
      'Premium Aluminium Extrusion',
      'Designed for Frameless Glass Railing Systems',
      'Supports 12mm to 16mm Toughened Glass (Model Dependent)',
      'Excellent Structural Stability',
      'Lightweight yet High Strength',
      'Corrosion Resistant',
      'Weather Resistant',
      'Maintenance Free',
      'Easy Installation',
      'Elegant Modern Finish',
      'Available in Multiple Profile Designs',
      'Suitable for Indoor & Outdoor Applications'
    ],

    specifications: {
      'Product Series': 'KM-1001 to KM-1022',
      'Material': 'Premium Aluminium Extrusion',
      'Glass Thickness': '12mm to 16mm (Model Dependent)',
      'Profile Length': '13 Ft / 16 Ft',
      'Surface Finish': 'Wooden Finish, Anodized Finish, Powder Coated Finish, Mill Finish',
      'Installation': 'Bottom Mounted',
      'Application': 'Frameless Glass Railing System'
    },

    industries: [
      'Residential Construction',
      'Commercial Construction',
      'Architecture',
      'Interior Design',
      'Infrastructure Projects',
      'Hospitality',
      'Real Estate',
      'Modern Building Projects'
    ]
  },

  {
    id: '2',

    slug: 'aluminium-profile-bracket',

    name: 'Aluminium Profile Bracket',

    shortDescription:
      'Premium aluminium profile brackets engineered for secure glass support in frameless railing systems, offering excellent strength, durability, and a clean architectural finish.',

    fullDescription: `KORMAX Aluminium Profile Brackets are precision-engineered aluminium components specially designed to provide reliable support for frameless glass railing systems. Manufactured using premium quality aluminium extrusion, these brackets ensure excellent structural stability while maintaining a sleek and modern appearance.

The product range includes KM-1031, KM-1032, KM-1033, and KM-1034 models, each designed to accommodate different installation requirements. Their lightweight construction, corrosion resistance, and premium surface finishes make them ideal for both residential and commercial architectural projects.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumProfileBracket/aluminium%20profile%20bracket.png',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumProfileBracket/KM-1031.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumProfileBracket/KM-1032.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumProfileBracket/KM-1033.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumProfileBracket/KM-1034.png',
    ],

    applications: [
      'Frameless Glass Railings',
      'Glass Balcony Systems',
      'Staircase Railings',
      'Terrace Railings',
      'Commercial Buildings',
      'Residential Buildings',
      'Office Partitions',
      'Architectural Glazing',
      'Hotels & Resorts',
      'Shopping Malls'
    ],

    features: [
      'Premium Aluminium Construction',
      'Precision Engineered Design',
      'Excellent Glass Support',
      'High Structural Stability',
      'Corrosion Resistant',
      'Weather Resistant',
      'Lightweight Design',
      'Easy Installation',
      'Low Maintenance',
      'Modern Architectural Finish',
      'Suitable for Indoor & Outdoor Applications',
      'Available in Multiple Profile Variants'
    ],

    specifications: {
      'Product Series': 'KM-1031 to KM-1034',
      'Material': 'Premium Aluminium Extrusion',
      'Bracket Width': '65 mm & 75 mm (Model Dependent)',
      'Surface Finish': 'Powder Coating, Anodized, Wooden Finish, Mill Finish',
      'Installation Type': 'Glass Profile Bracket',
      'Application': 'Frameless Glass Railing Systems'
    },

    industries: [
      'Architecture',
      'Residential Construction',
      'Commercial Construction',
      'Interior Design',
      'Hospitality',
      'Real Estate',
      'Infrastructure',
      'Modern Building Projects'
    ]
  },
  {
    id: '3',

    slug: 'aluminium-hand-rail',

    name: 'Aluminium Hand Rail',

    shortDescription:
      'Premium aluminium hand rails designed for frameless glass railing systems, combining modern aesthetics, superior durability, and comfortable hand support for residential and commercial spaces.',

    fullDescription: `KORMAX Aluminium Hand Rails are precision-engineered using premium quality aluminium to provide reliable support, elegant appearance, and long-lasting performance. Designed specifically for frameless glass railing systems, these hand rails enhance both safety and architectural aesthetics.

The collection includes multiple profile designs from KM-1051 to KM-1070, featuring round, square, rectangular, oval, diamond, and LED-compatible hand rail profiles. Suitable for balconies, staircases, terraces, commercial buildings, offices, hotels, and modern residential projects, these hand rails are available in a variety of premium surface finishes to complement contemporary architectural designs.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/home-main.jpg',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1051.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1052.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1053.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1054.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1055.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1056.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1057.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1058.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1059.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1060.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1061.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1062.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1063.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1064.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1065.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1066.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1067.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1068.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1069.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/KM-1070.png',

    ],

    applications: [
      'Frameless Glass Railings',
      'Balcony Railings',
      'Staircase Railings',
      'Terrace Railings',
      'Commercial Buildings',
      'Residential Buildings',
      'Hotels & Resorts',
      'Shopping Malls',
      'Office Buildings',
      'Architectural Glass Systems'
    ],

    features: [
      'Premium Aluminium Construction',
      'Ergonomic Hand Grip Design',
      'High Strength & Lightweight',
      'Excellent Corrosion Resistance',
      'Weather Resistant',
      'Modern Architectural Appearance',
      'Low Maintenance',
      'Easy Installation',
      'Suitable for Indoor & Outdoor Applications',
      'Available in Multiple Profile Designs',
      'LED Compatible Models Available',
      'Long Service Life'
    ],

    specifications: {
      'Product Series': 'KM-1051 to KM-1070',
      'Material': 'Premium Aluminium Extrusion',
      'Profile Types': 'Round, Square, Rectangular, Oval, Diamond & LED Profiles',
      'Profile Length': '13 Ft / 16 Ft',
      'Surface Finish': 'Powder Coating, Anodized, Wooden Finish, Mill Finish',
      'Application': 'Frameless Glass Railing Systems'
    },

    industries: [
      'Residential Construction',
      'Commercial Construction',
      'Architecture',
      'Interior Design',
      'Hospitality',
      'Real Estate',
      'Infrastructure',
      'Modern Building Projects'
    ]
  },
  {
    id: '4',

    slug: 'aluminium-plain-hand-rail',

    name: 'Aluminium Plain Hand Rail',

    shortDescription:
      'Elegant aluminium plain hand rails with clean profile designs, engineered to provide comfortable grip, premium appearance, and reliable support for modern railing systems.',

    fullDescription: `KORMAX Aluminium Plain Hand Rails are manufactured using premium quality aluminium extrusion to deliver a sleek, minimalist appearance while providing excellent durability and user comfort. Designed for modern architectural projects, these hand rails complement frameless glass railings and contemporary staircase systems.

The collection includes Round, Square and Rectangular profile options (KM-1071 to KM-1074), making them suitable for both residential and commercial projects where aesthetics and functionality are equally important.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumPlainHandRail/home-main.jpg',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumPlainHandRail/KM-1071.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumPlainHandRail/KM-1072.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumPlainHandRail/KM-1073.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumPlainHandRail/KM-1074.png',

    ],

    applications: [
      'Top Hand Support',
      'Frameless Glass Railings',
      'Modern Staircase Railings',
      'Balcony Hand Rails',
      'Terrace Railings',
      'Indoor Railings',
      'Outdoor Railings',
      'Architectural Railing Projects'
    ],

    features: [
      'Premium Aluminium Extrusion',
      'Minimalist Profile Design',
      'Comfortable Grip',
      'Smooth Surface Finish',
      'Corrosion Resistant',
      'Lightweight Construction',
      'Weather Resistant',
      'Easy Installation',
      'Low Maintenance',
      'Long Service Life',
      'Available in Multiple Profile Shapes',
      'Suitable for Modern Architecture'
    ],

    specifications: {
      'Product Series': 'KM-1071 to KM-1074',
      'Material': 'Premium Aluminium Extrusion',
      'Profile Types': 'Round, Square & Rectangular',
      'Profile Length': '13 Ft / 16 Ft',
      'Surface Finish': 'Powder Coating, Anodized, Wooden Finish, Mill Finish',
      'Application': 'Hand Rail for Glass & Aluminium Railing Systems'
    },

    industries: [
      'Residential Projects',
      'Commercial Buildings',
      'Luxury Villas',
      'Apartments',
      'Hospitality',
      'Interior Architecture',
      'Real Estate',
      'Modern Infrastructure'
    ]
  },
  {
    id: '5',

    slug: 'aluminium-balcony-bracket',

    name: 'Aluminium Balcony Bracket',

    shortDescription:
      'Premium aluminium balcony brackets engineered to provide secure glass support, structural stability, and a modern architectural appearance for balcony railing systems.',

    fullDescription: `KORMAX Aluminium Balcony Brackets are precision-manufactured from premium aluminium extrusion to deliver exceptional strength, durability, and long-term performance. Designed specifically for frameless glass balcony railing systems, these brackets ensure secure glass installation while maintaining a sleek and contemporary appearance.

The product range includes KM-1401 to KM-1422 with multiple profile designs to suit various architectural and installation requirements. Their corrosion-resistant construction and premium finishes make them ideal for residential, commercial, and high-rise building projects.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/AluminiumBalconyBracket.png',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1401.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1402.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1403.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1404.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1405.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1406.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1407.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1408.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1409.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1410.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1411.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1412.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1413.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1414.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1415.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1416.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1417.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1418.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1419.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1420.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1421.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumBalconyBracket/KMX-1422.png.png'
    ],

    applications: [
      'Glass Balcony Railings',
      'Apartment Balconies',
      'Residential Balconies',
      'Commercial Balcony Systems',
      'Hotel & Resort Balconies',
      'Terrace Glass Railings',
      'Deck Glass Railings',
      'High-Rise Building Railings'
    ],

    features: [
      'Premium Aluminium Extrusion',
      'Heavy-Duty Structural Support',
      'Designed for Balcony Glass Railings',
      'Excellent Load Bearing Capacity',
      'Corrosion Resistant',
      'Weather Resistant',
      'Precision Engineered',
      'Easy Installation',
      'Low Maintenance',
      'Modern Architectural Finish',
      'Multiple Bracket Designs Available',
      'Suitable for Indoor & Outdoor Applications'
    ],

    specifications: {
      'Product Series': 'KM-1401 to KM-1422',
      'Material': 'Premium Aluminium Extrusion',
      'Product Type': 'Balcony Glass Bracket',
      'Profile Length': '13 Ft / 16 Ft',
      'Surface Finish': 'Powder Coating, Anodized, Wooden Finish, Mill Finish',
      'Application': 'Frameless Glass Balcony Railing Systems'
    },

    industries: [
      'Residential Construction',
      'Commercial Buildings',
      'High-Rise Apartments',
      'Hospitality Projects',
      'Real Estate',
      'Architecture',
      'Infrastructure',
      'Luxury Residential Projects'
    ]
  },
  {
    id: '6',

    slug: 'aluminium-staircase-balcony-bracket',

    name: 'Aluminium Staircase & Balcony Bracket',

    shortDescription:
      'Heavy-duty aluminium staircase and balcony brackets engineered for secure glass railing installations, delivering exceptional stability, precision, and modern architectural aesthetics.',

    fullDescription: `KORMAX Aluminium Staircase & Balcony Brackets are precision-engineered aluminium support systems developed for staircase and balcony glass railing installations. Manufactured using premium quality aluminium extrusion, these brackets provide excellent load-bearing performance while maintaining a sleek architectural appearance.

The collection includes KM-1431 to KM-1453 models, offering multiple bracket profiles to suit different staircase angles, balcony layouts, and installation requirements. Designed for both indoor and outdoor environments, these brackets combine structural reliability with premium surface finishes for long-lasting performance.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/Aluminium%20Staircase%20&%20Balcony%20Bracket.png',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1431.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1432.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1433.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1434.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1435.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1436.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1437.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1438.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1439.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1440.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1441.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1442.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1443.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1444.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1445.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1446.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1447.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1446-1.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1447-1.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1448.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1449.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1450.png.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumStaircase&BBracket/KMX-1451.png.png',


    ],

    applications: [
      'Glass Staircase Railings',
      'Duplex Stair Railings',
      'Commercial Stairways',
      'Balcony Glass Support',
      'Terrace Glass Installations',
      'Multi-Level Buildings',
      'Luxury Villa Staircases',
      'Architectural Glass Stair Systems'
    ],

    features: [
      'Heavy-Duty Aluminium Construction',
      'Designed for Staircase & Balcony Applications',
      'High Load Bearing Capacity',
      'Precision Engineered Bracket Design',
      'Excellent Structural Stability',
      'Corrosion Resistant',
      'Weather Resistant',
      'Premium Surface Finish',
      'Easy Glass Installation',
      'Low Maintenance',
      'Long Service Life',
      'Available in Multiple Bracket Variants'
    ],

    specifications: {
      'Product Series': 'KM-1431 to KM-1453',
      'Material': 'Premium Aluminium Extrusion',
      'Product Type': 'Staircase & Balcony Glass Bracket',
      'Profile Length': '13 Ft / 16 Ft',
      'Surface Finish': 'Powder Coating, Anodized, Wooden Finish, Mill Finish',
      'Application': 'Glass Staircase & Balcony Railing Systems'
    },

    industries: [
      'Luxury Residential Projects',
      'Commercial Complexes',
      'Shopping Malls',
      'Hotels & Resorts',
      'Corporate Buildings',
      'Architectural Engineering',
      'Infrastructure Projects',
      'Modern Construction'
    ]
  },
  {
    id: '7',

    slug: 'aluminium-railing-accessories',

    name: 'Aluminium Railing Accessories',

    shortDescription:
      'Precision-engineered aluminium railing accessories designed to complete frameless glass railing systems with secure connections, clean finishing, and long-lasting performance.',

    fullDescription: `KORMAX Aluminium Railing Accessories are manufactured using premium quality aluminium to provide reliable connections and finishing solutions for modern glass railing systems. Designed for seamless compatibility with KORMAX railing profiles, these accessories ensure secure installation, improved structural integrity, and a premium architectural finish.

The collection includes KM-1455 to KM-1493, offering a wide range of connectors, end caps, joining components, finishing covers, and installation accessories. Suitable for residential, commercial, and architectural projects, these accessories enhance both the functionality and appearance of complete railing systems.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/aluminiumrailingaccessories.png',

    gallery: [
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1455.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1456.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1457.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1458.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1459.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1460.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1461.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1462.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1463.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1464.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1465.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1466.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1467.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1468.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1469.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1470.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1471.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1472.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1473.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1491.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1492.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KM-1493.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1500.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1501.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1502.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1503.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1504.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1505.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1506.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1507.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1508.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1509.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1510.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1511.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1512.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1513.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1514.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1515.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1516.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1517.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1518.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1519.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1520.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1521.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1522.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1523.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1524.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1525.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1526.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1527.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1528.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1529.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1530.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumRailingAccessories/KMX-1531.png",

    ],

    applications: [
      'Glass Railing Installation',
      'Hand Rail Connections',
      'Profile Joining',
      'End Profile Finishing',
      'Glass Railing Assembly',
      'Architectural Railing Systems',
      'Balcony Railing Accessories',
      'Staircase Railing Components'
    ],

    features: [
      'Premium Aluminium Construction',
      'Precision Machined Components',
      'Perfect Fit with KORMAX Profiles',
      'Secure Connection System',
      'Neat & Professional Finishing',
      'Corrosion Resistant',
      'Weather Resistant',
      'Lightweight Design',
      'Easy Installation',
      'Low Maintenance',
      'Long Service Life',
      'Wide Range of Accessories'
    ],

    specifications: {
      'Product Series': 'KM-1455 to KM-1493',
      'Material': 'Premium Aluminium',
      'Product Type': 'Railing Accessories',
      'Compatible With': 'KORMAX Aluminium Railing Systems',
      'Surface Finish': 'Powder Coating, Anodized, Wooden Finish, Mill Finish',
      'Application': 'Glass Railing Assembly & Finishing'
    },

    industries: [
      'Architectural Projects',
      'Residential Construction',
      'Commercial Buildings',
      'Interior Design',
      'Hospitality',
      'Real Estate',
      'Infrastructure',
      'Modern Glass Railing Systems'
    ]
  },
  {
    id: '8',

    slug: 'gate-wall-profile',

    name: 'Gate & Wall Profile',

    shortDescription:
      'Premium aluminium gate and wall profiles engineered for modern architectural gates, boundary walls, partitions, and decorative façade applications with superior durability and elegant aesthetics.',

    fullDescription: `KORMAX Gate & Wall Profiles are precision-engineered aluminium extrusions developed for contemporary gate, wall, and architectural applications. Manufactured using premium quality aluminium, these profiles combine structural strength with a sleek modern appearance, making them suitable for residential, commercial, and industrial projects.

The collection includes KM-1541 to KM-1552 profile variants, offering multiple design options to meet different installation and architectural requirements. Their corrosion-resistant construction, lightweight nature, and premium finishes ensure long-lasting performance in both indoor and outdoor environments.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/GateAndWallProfile.png',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KM-1541.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KM-1542.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KM-1543.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KM-1544.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1545.png',
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1546.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1547.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1548.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1549.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1550.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1551.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/KMX-1552.png",

    ],

    applications: [
      'Aluminium Gates',
      'Boundary Wall Panels',
      'Architectural Wall Cladding',
      'Decorative Privacy Screens',
      'Entrance Gates',
      'Compound Wall Designs',
      'Exterior Architectural Features',
      'Commercial Building Facades'
    ],

    features: [
      'Premium Aluminium Extrusion',
      'Modern Architectural Profile Design',
      'High Structural Strength',
      'Excellent Corrosion Resistance',
      'Weather Resistant',
      'Lightweight Construction',
      'Elegant Surface Finish',
      'Easy Fabrication & Installation',
      'Minimal Maintenance',
      'Long Service Life',
      'Available in Multiple Profile Designs',
      'Suitable for Indoor & Outdoor Applications'
    ],

    specifications: {
      'Product Series': 'KM-1541 to KM-1552',
      'Material': 'Premium Aluminium Extrusion',
      'Product Type': 'Gate & Wall Profile',
      'Available Length': '13 Ft / 16 Ft',
      'Surface Finish': 'Powder Coating, Anodized, Wooden Finish, Mill Finish',
      'Application': 'Architectural Gates & Wall Systems'
    },

    industries: [
      'Residential Architecture',
      'Commercial Buildings',
      'Luxury Villas',
      'Landscape Architecture',
      'Real Estate Development',
      'Hospitality Projects',
      'Infrastructure',
      'Modern Architectural Construction'
    ]
  },
  {
    id: '9',

    slug: 'steel-glass-railing-bracket',

    name: 'Steel Glass Railing Bracket',

    shortDescription:
      'Heavy-duty steel glass railing brackets engineered for secure glass mounting, superior load-bearing capacity, and long-lasting architectural performance.',

    fullDescription: `KORMAX Steel Glass Railing Brackets are precision-engineered to provide reliable support for frameless and semi-frameless glass railing systems. Manufactured from premium-grade steel, these brackets deliver exceptional strength, rigidity, and durability while maintaining a modern architectural appearance.

The collection includes KM-1561 to KM-1581, offering multiple bracket designs suitable for balconies, staircases, terraces, commercial buildings, and premium architectural projects. Designed for heavy-duty applications, these brackets ensure secure glass fixing with minimal maintenance.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/steelGlassRailingBracket.png',

    gallery: [
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1561.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1562.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1563.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1564.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1565.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1566.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1567.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1568.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1569.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1569_2.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1570.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1572.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1573_2.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1574_2.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1575_2.png",
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1573.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1574.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1575.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1576.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1577.png',
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1578.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1579.png",
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1580.png",

      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/steelGlassRailingBracket/KMX-1581.png",

    ],

    applications: [
      'Heavy Duty Glass Railings',
      'Glass Balcony Support',
      'Commercial Glass Railings',
      'Outdoor Glass Barriers',
      'High-Rise Buildings',
      'Public Infrastructure',
      'Safety Glass Installations',
      'Architectural Steel Railings'
    ],

    features: [
      'Premium Steel Construction',
      'Heavy Load Bearing',
      'High Structural Stability',
      'Precision Machined',
      'Rust Resistant Finish',
      'Weather Resistant',
      'Secure Glass Clamping',
      'Easy Installation',
      'Long Service Life',
      'Low Maintenance',
      'Multiple Bracket Designs',
      'Suitable for Heavy Duty Applications'
    ],

    specifications: {
      'Product Series': 'KM-1561 to KM-1581',
      'Material': 'Premium Steel',
      'Product Type': 'Glass Railing Bracket',
      'Surface Finish': 'Premium Finish',
      'Application': 'Glass Railing Support System'
    },

    industries: [
      'Commercial Buildings',
      'Infrastructure',
      'Hospitality',
      'Shopping Malls',
      'Corporate Offices',
      'Residential Projects',
      'Architecture',
      'Public Spaces'
    ]
  },
  {
    id: '10',

    slug: 'steel-pipe',

    name: 'Steel Pipe',

    shortDescription:
      'Premium steel pipes designed for railing posts, structural support, and architectural fabrication with superior strength and durability.',

    fullDescription: `KORMAX Steel Pipes are manufactured for architectural railing systems and structural fabrication applications. Engineered for excellent strength and dimensional accuracy, these pipes provide reliable support while delivering a clean modern appearance.

The Steel Pipe collection includes KM-1591 to KM-1596, suitable for railing posts, support members, entrance structures, partitions, and architectural steel frameworks.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/SteelPips/STEEL-PIP.png',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/SteelPips/KMX-1591.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/SteelPips/KMX-1592.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/SteelPips/KMX-1593.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/SteelPips/KMX-1594.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/SteelPips/KMX-1595.png',
      "https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/SteelPips/KMX-1596.png"
    ],

    applications: [
      'Railing Posts',
      'Glass Railing Framework',
      'Architectural Fabrication',
      'Support Columns',
      'Structural Frames',
      'Gate Fabrication',
      'Commercial Structures',
      'Decorative Steel Works'
    ],

    features: [
      'Premium Quality Steel',
      'High Structural Strength',
      'Excellent Weldability',
      'Corrosion Resistant Finish',
      'Dimensional Accuracy',
      'Heavy Duty Performance',
      'Easy Fabrication',
      'Smooth Surface Finish',
      'Low Maintenance',
      'Long Service Life'
    ],

    specifications: {
      'Product Series': 'KM-1591 to KM-1596',
      'Material': 'Premium Steel',
      'Product Type': 'Steel Pipe',
      'Surface Finish': 'Premium Finish',
      'Application': 'Architectural & Structural Support'
    },

    industries: [
      'Steel Fabrication',
      'Construction',
      'Architecture',
      'Infrastructure',
      'Commercial Projects',
      'Residential Projects',
      'Industrial Buildings',
      'Engineering'
    ]
  },
  {
    id: '11',

    slug: 'glass-door-patch-fittings',

    name: 'Glass Door Patch Fittings',

    shortDescription:
      'Premium glass door patch fittings designed for frameless glass doors, providing secure fixing, smooth operation, and elegant architectural aesthetics.',

    fullDescription: `KORMAX Glass Door Patch Fittings are precision-manufactured hardware components developed for frameless glass door systems. Designed for strength, durability, and smooth functionality, these fittings ensure secure glass installation while maintaining a clean, contemporary appearance.

The collection includes KM-1600 to KM-1642 with a comprehensive range of top patches, bottom patches, locks, connectors, pivot fittings, and door accessories suitable for commercial entrances, offices, hotels, and premium architectural projects.`,

    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/home-main.png',

    gallery: [
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1600.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1601.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1602.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1603.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1604.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1605.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1606.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1607.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1608.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1609.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1610.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1611.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1619.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1620.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1621.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1622.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1623.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1624.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1625.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1626.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1627.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1628.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1629.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1630.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1631.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1632.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1633.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1634.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1635.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1636.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1637.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1638.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1639.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1640.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1641.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/KMX-1642.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1611.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1612.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1613.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1614.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1615.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1616.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1617.png',
      'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/FR-1618.png',
    ],

    applications: [
      'Frameless Glass Doors',
      'Office Glass Entrances',
      'Commercial Glass Doors',
      'Hotel Entrance Doors',
      'Retail Showrooms',
      'Glass Partition Doors',
      'Corporate Offices',
      'Architectural Glass Systems'
    ],

    features: [
      'Premium Door Hardware',
      'Secure Glass Fixing',
      'Smooth Door Operation',
      'High Precision Engineering',
      'Corrosion Resistant',
      'Modern Architectural Finish',
      'Heavy Duty Construction',
      'Easy Installation',
      'Reliable Performance',
      'Low Maintenance',
      'Complete Door Hardware Solution',
      'Long Service Life'
    ],

    specifications: {
      'Product Series': 'KM-1600 to KM-1642',
      'Material': 'Premium Grade Metal',
      'Product Type': 'Glass Door Patch Fittings',
      'Compatible Glass': 'Frameless Glass Doors',
      'Surface Finish': 'Premium Finish',
      'Application': 'Glass Door Hardware System'
    },

    industries: [
      'Commercial Buildings',
      'Corporate Offices',
      'Hotels',
      'Retail Stores',
      'Hospitals',
      'Shopping Centres',
      'Interior Design',
      'Architectural Projects'
    ]
  },
];

export const industries = [
  {
    id: '1',
    name: 'Residential Projects',
    description:
      'Premium aluminium railing systems and architectural hardware for villas, apartments, and residential buildings.',

  },
  {
    id: '2',
    name: 'Commercial Buildings',
    description:
      'Modern aluminium glass railing solutions for offices, shopping malls, and commercial spaces.',

  },
  {
    id: '3',
    name: 'Hospitality',
    description:
      'Elegant aluminium railings, glass hardware, and architectural profiles for hotels and resorts.',

  },
  {
    id: '4',
    name: 'Infrastructure Projects',
    description:
      'Reliable aluminium products engineered for public infrastructure and large-scale developments.',

  },
  {
    id: '5',
    name: 'Interior & Architecture',
    description:
      'Premium architectural hardware and aluminium profiles for modern interior and exterior applications.',

  },
  {
    id: '6',
    name: 'Glass & Railing Solutions',
    description:
      'Complete aluminium glass railing systems, patch fittings, and railing accessories for contemporary architecture.',

  },
];

export const certificates: Certificate[] = [
  {
    id: '1',
    name: 'ISO 9001:2015',
    description: 'Quality Management System Certification',
    image: 'https://images.unsplash.com/photo-1554224155-6b22cc55e979?w=400&q=80',
  },
  {
    id: '2',
    name: 'ISO 14001:2015',
    description: 'Environmental Management System',
    image: 'https://images.unsplash.com/photo-1454165804609-d3e6ba307a6e?w=400&q=80',
  },
  {
    id: '3',
    name: 'OHSAS 18001',
    description: 'Occupational Health & Safety Management',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80',
  },
  {
    id: '4',
    name: 'PED Certified',
    description: 'Pressure Equipment Directive Compliance',
    image: 'https://images.unsplash.com/photo-158109216060d-1c9b8a6c7b9e?w=400&q=80',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    title: 'Aluminium Continuous Bottom Profile',
    category: 'Railing Systems',
    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumContinuosBottomProfile/home_main.png',
    description: 'Frameless glass railing bottom profiles.'
  },
  {
    id: '2',
    title: 'Aluminium Profile Bracket',
    category: 'Brackets',
    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumProfileBracket/aluminium%20profile%20bracket.png',
    description: 'Premium profile mounting brackets.'
  },
  {
    id: '3',
    title: 'Aluminium Hand Rail',
    category: 'Hand Rails',
    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumHandRail/home-main.jpg',
    description: 'Sturdy and elegant hand rails.'
  },
  {
    id: '4',
    title: 'Aluminium Plain Hand Rail',
    category: 'Hand Rails',
    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/AluminiumPlainHandRail/home-main.jpg',
    description: 'Minimalist hand rail systems.'
  },
  {
    id: '5',
    title: 'Gate & Wall Profile',
    category: 'Profiles',
    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GateAndWallProfile/GateAndWallProfile.png',
    description: 'Gate & wall profiles.'
  },
  {
    id: '6',
    title: 'Glass Door Patch Fittings',
    category: 'Fittings',
    image: 'https://tmpbnytozyxazcsugvgp.supabase.co/storage/v1/object/public/images/GlassDoorPatchFittings/home-main.png',
    description: 'Architectural glass door patch fittings.'
  }
];

export const trustBadges = [
  { id: '1', icon: 'Shield', title: 'ISO Certified Company', description: 'ISO certified supplier to ensure that your project meets strict quality specifications.' },
  { id: '2', icon: 'Headphones', title: '24/7 Support Service', description: '24/7 support service by a technical team, quick response within a few hours.' },
  { id: '3', icon: 'Users', title: 'Experienced Team', description: 'Our experienced workforce holds the key to effective management.' },
];

export const qualityHighlights = [
  { id: '1', icon: 'CheckCircle', title: 'Quality Product', description: 'We ensure rigorous testing with 100% radiography reports and PMI (Positive Material Identification) for guaranteed quality.' },
  { id: '2', icon: 'Settings', title: 'Services', description: 'Complete testing, verification, and reliable supply chain support to deliver consistent performance and trusted materials.' },
  { id: '3', icon: 'Award', title: 'Experience', description: 'Over 20+ years of expertise ensures precision manufacturing, secure packaging, and dependable delivery.' },
  { id: '4', icon: 'Lightbulb', title: 'Innovative Solutions', description: 'We provide advanced, customer-focused solutions backed by innovation, ensuring maximum performance and satisfaction.' },
];

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is your minimum order quantity?',
    answer: 'Our minimum order quantity varies by product type. For standard items, we can accommodate orders starting from 100kg. For specialized alloys or custom specifications, minimum quantities may be higher. Contact our sales team for specific requirements.',
  },
  {
    id: '2',
    question: 'Do you provide material certifications and test reports?',
    answer: 'Yes, all our products come with complete material certifications including Mill Test Certificates (MTC), EN 10204 3.1/3.2 certifications, radiography reports, and third-party inspection reports upon request. PMI testing is done for all materials.',
  },
  {
    id: '3',
    question: 'What are your payment terms?',
    answer: 'We offer flexible payment terms including advance payment, LC at sight, and credit terms for established customers. Standard terms are 30% advance with balance against documents. We accept T/T, LC, and other major payment methods.',
  },
  {
    id: '4',
    question: 'Can you supply custom sizes and specifications?',
    answer: 'Absolutely. We specialize in custom orders and can supply materials in specific sizes, grades, and specifications as per your requirements. Our technical team works closely with customers to meet exact specifications.',
  },
  {
    id: '5',
    question: 'What is your delivery time for standard products?',
    answer: 'For stock items, delivery is typically within 5-7 working days. For made-to-order products, lead times range from 2-8 weeks depending on the material, quantity, and specifications. Express delivery available for urgent requirements.',
  },
  {
    id: '6',
    question: 'Do you export internationally?',
    answer: 'Yes, we export to over 40 countries worldwide. We handle all export documentation, packaging as per international standards, and can arrange shipping to any destination. Our logistics team ensures timely and safe delivery.',
  },
];

export const companyInfo = {
  name: 'Kormax Aluwyn Extrusions',
  tagline: 'strength • Style • Quality ',
  description: 'KORMAX is a trusted supplier of premium aluminium glass railing system, sheets(aluminium sheet, Acp sheet, al penal ) aluminium profile, modular hardware and architectural products, aluminium rod ,sheet , aluminium pipe , aluminium extrusion.',
  fullDescription: 'With a strong commitment to excellence and customer satisfaction, Kormax Industries continuously strives to deliver superior pipes, tubes, and fitting solutions. Through consistent quality and reliable service, the company has built a strong reputation and secured a leading position in the market.',
  foundedYear: 2016,
  employees: 500,
  countries: 40,
  productsSupplied: '1000+',
  address: 'B27 , grand vishala ind estate, Nr. Royal hotel, S.P. ring road, Odhav Ahmedabad - 382415',
  phone: '+91 99838 11163',
  email: 'kormaxaluwyn@gmail.com ',
  enquiryEmail: 'kormaxaluwyn@gmail.com ',
  whatsapp: '+91 99838 11163',
  businessHours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '9:00 AM - 2:00 PM',
    sunday: 'Closed',
  },
  socialLinks: {
    linkedin: 'https://linkedin.com/company/primemetal',
    twitter: 'https://twitter.com/primemetal',
    facebook: 'https://facebook.com/primemetal',
  },
};
