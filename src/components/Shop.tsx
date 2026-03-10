"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { products, type Product } from "@/data/products";

export default function Shop() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shop" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-peach/3 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-peach"
          >
            Shop
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 font-heading text-4xl  tracking-tight text-warm-black sm:text-5xl"
          >
            Our Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-warm-gray"
          >
            10% of every order supports Palestinian refugee families. Premium
            quality, meaningful impact.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-warm-gray-light">
            More styles & colors dropping soon
          </p>
          <div className="mt-3 flex justify-center gap-2">
            {["Peach", "Terracotta", "Sand", "Sage"].map((color) => (
              <span
                key={color}
                className="rounded-full border border-peach/20 px-3 py-1 text-xs text-warm-gray"
              >
                {color}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
  inView,
}: {
  product: Product;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer"
    >
      <a href={`/product/${product.slug}`}>
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-dark">
          <motion.img
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />

          {/* Overlay on hover */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-warm-black/60 via-transparent to-transparent p-6"
          >
            <span className="w-full rounded-full bg-cream py-3 text-center text-sm font-semibold text-warm-black transition-transform hover:scale-[1.02]">
              View Details
            </span>
          </motion.div>

          {/* Tag */}
          {product.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-warm-black px-3 py-1 text-xs font-medium text-cream">
              {product.tag}
            </span>
          )}
        </div>

        {/* Info */}
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
