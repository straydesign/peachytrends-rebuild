"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RelatedProducts from "@/components/RelatedProducts";
import type { Product } from "@/data/products";

const sizeGuideData: Record<string, string[]> = {
  XS: ['32–34"', '26–28"', '36–38"'],
  S: ['34–36"', '28–30"', '38–40"'],
  M: ['38–40"', '32–34"', '40–42"'],
  L: ['42–44"', '36–38"', '42–44"'],
  XL: ['46–48"', '40–42"', '44–46"'],
  XXL: ['50–52"', '44–46"', '46–48"'],
};

export default function ProductDetailClient({
  product,
}: {
  product: Product;
}) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  function handleAddToCart() {
    if (!selectedSize) return;
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  }

  return (
    <>
      <Navbar basePath="/" />

      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-warm-gray-light">
            <a
              href="/"
              className="transition-colors hover:text-warm-black"
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/#shop"
              className="transition-colors hover:text-warm-black"
            >
              Shop
            </a>
            <span>/</span>
            <span className="text-warm-black">{product.name}</span>
          </nav>

          {/* Product Layout */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-dark"
            >
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-warm-black px-3 py-1.5 text-xs font-medium text-cream">
                  {product.tag}
                </span>
              )}
            </motion.div>

            {/* Right — Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col"
            >
              {/* Tag */}
              {product.tag && (
                <span className="mb-3 w-fit rounded-full bg-peach/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-peach-dark">
                  {product.tag}
                </span>
              )}

              {/* Name */}
              <h1 className="font-heading text-3xl tracking-tight text-warm-black sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              {/* Price & Color */}
              <div className="mt-4 flex items-baseline gap-4">
                <span className="text-2xl font-semibold text-warm-black">
                  {product.price}
                </span>
                <span className="text-sm text-warm-gray-light">
                  {product.color}
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 leading-relaxed text-warm-gray">
                {product.description}
              </p>

              {/* Size Selector */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-warm-black">
                    Size
                  </span>
                  <button
                    onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
                    className="text-xs font-medium text-peach transition-colors hover:text-peach-dark"
                  >
                    {sizeGuideOpen ? "Hide" : "Size Guide"}
                  </button>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "border-warm-black bg-warm-black text-cream"
                          : "border-peach/20 text-warm-black hover:border-warm-black"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Size Guide */}
                <AnimatePresence>
                  {sizeGuideOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 rounded-xl border border-peach/10 bg-cream-dark/50 p-4">
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="text-warm-gray-light">
                              <th className="pb-2 font-medium">Size</th>
                              <th className="pb-2 font-medium">Chest</th>
                              <th className="pb-2 font-medium">Waist</th>
                              <th className="pb-2 font-medium">Hips</th>
                            </tr>
                          </thead>
                          <tbody className="text-warm-gray">
                            {Object.entries(sizeGuideData).map(
                              ([size, measurements]) => (
                                <tr
                                  key={size}
                                  className="border-t border-peach/5"
                                >
                                  <td className="py-1.5 font-medium text-warm-black">
                                    {size}
                                  </td>
                                  {measurements.map((m, i) => (
                                    <td key={i} className="py-1.5">
                                      {m}
                                    </td>
                                  ))}
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className={`mt-8 w-full rounded-full py-4 text-sm font-semibold transition-all duration-300 ${
                  selectedSize
                    ? "bg-warm-black text-cream hover:bg-terracotta hover:scale-[1.02]"
                    : "cursor-not-allowed bg-warm-black/30 text-cream/50"
                }`}
              >
                {selectedSize
                  ? `Add to Cart — ${product.price}`
                  : "Select a Size"}
              </button>

              {/* Details */}
              <div className="mt-10 border-t border-peach/10 pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-black">
                  Details
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {product.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-warm-gray"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peach" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts currentSlug={product.slug} />
      </main>

      <Footer basePath="/" />

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-warm-black px-6 py-3 text-sm font-medium text-cream shadow-xl"
          >
            Added {product.name} ({selectedSize}) to cart
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
