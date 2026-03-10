import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — Peachy Trends`,
    description: product.description,
    openGraph: {
      title: `${product.name} — Peachy Trends`,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 1067 }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
