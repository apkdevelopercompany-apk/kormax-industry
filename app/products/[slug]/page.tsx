import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import ProductDetailsClient from './ProductDetailsClient';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | KORMAX`,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
      type: 'website',
    },
  };
}

export default function ProductDetailsPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return <ProductDetailsClient product={product} />;
}
