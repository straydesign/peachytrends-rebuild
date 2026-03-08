"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const products = [
  {
    name: "Fuerza Signature Tee",
    price: "$38",
    tag: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&auto=format&fit=crop",
    color: "Cream / Terracotta",
  },
  {
    name: "Purpose Hoodie",
    price: "$65",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80&auto=format&fit=crop",
    color: "Warm Black",
  },
  {
    name: "Impact Crewneck",
    price: "$52",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&q=80&auto=format&fit=crop",
    color: "Desert Sand",
  },
  {
    name: "Community Cap",
    price: "$28",
    tag: "Limited",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=600&q=80&auto=format&fit=crop",
    color: "Peachy / White",
  },
  {
    name: "Strength Long Sleeve",
    price: "$45",
    tag: null,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80&auto=format&fit=crop",
    color: "Off-White",
  },
  {
    name: "Unity Joggers",
    price: "$58",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80&auto=format&fit=crop",
    color: "Stone Gray",
  },
];

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
            className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-warm-black sm:text-5xl"
          >
            Our Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-warm-gray"
          >
            Every piece supports the Fuerza Foundation. Premium quality,
            meaningful impact.
          </motion.p>
        </div>

        {/* Product Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard
              key={product.name}
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
  product: (typeof products)[0];
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
          <button className="w-full rounded-full bg-cream py-3 text-sm font-semibold text-warm-black transition-transform hover:scale-[1.02]">
            Quick View
          </button>
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
          <p className="mt-0.5 text-sm text-warm-gray-light">{product.color}</p>
        </div>
        <span className="text-lg font-semibold text-warm-black">
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}
