"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getRelatedProducts } from "@/data/products";

export default function RelatedProducts({
  currentSlug,
}: {
  currentSlug: string;
}) {
  const related = getRelatedProducts(currentSlug);

  return (
    <section className="mt-24 border-t border-peach/10 pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center font-heading text-3xl tracking-tight text-warm-black sm:text-4xl">
          You May Also Like
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((product, i) => (
            <RelatedCard key={product.slug} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCard({
  product,
  index,
}: {
  product: ReturnType<typeof getRelatedProducts>[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer"
    >
      <a href={`/product/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-dark">
          <motion.img
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />

          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-warm-black/60 via-transparent to-transparent p-6"
          >
            <span className="w-full rounded-full bg-cream py-3 text-center text-sm font-semibold text-warm-black">
              View Details
            </span>
          </motion.div>

          {product.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-warm-black px-3 py-1 text-xs font-medium text-cream">
              {product.tag}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="font-medium text-warm-black transition-colors group-hover:text-terracotta">
              {product.name}
            </h3>
            <p className="mt-0.5 text-sm text-warm-gray-light">
              {product.color}
            </p>
          </div>
          <span className="text-lg font-semibold text-warm-black">
            {product.price}
          </span>
        </div>
      </a>
    </motion.div>
  );
}
