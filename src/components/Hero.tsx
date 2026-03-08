"use client";

import { motion } from "framer-motion";

const words = ["Values", "Impact", "Purpose", "Future"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark/40 to-peach-light/20" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[15%] h-72 w-72 rounded-full bg-peach/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] bottom-[20%] h-96 w-96 rounded-full bg-terracotta/8 blur-3xl"
      />

      {/* Hero image - right side on desktop */}
      <div className="absolute right-0 top-0 hidden h-full w-[45%] lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1200&q=80&auto=format&fit=crop"
            alt="Fashion lifestyle"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream/40 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-peach/30 bg-peach/10 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-peach animate-pulse" />
            <span className="text-sm font-medium text-terracotta">
              Apparel with Purpose
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-[1.1] tracking-tight text-warm-black sm:text-6xl lg:text-7xl"
          >
            Wear Your{" "}
            <span className="relative">
              <span className="gradient-text">Values</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-2 left-0 h-1 w-full origin-left rounded-full bg-peach/40"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-warm-gray"
          >
            Premium apparel that gives back. Every purchase supports a
            cause — we partner with foundations making real change, so your
            style creates impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#shop"
              className="group relative overflow-hidden rounded-full bg-warm-black px-8 py-4 text-base font-semibold text-cream transition-all duration-300 hover:shadow-lg hover:shadow-peach/20"
            >
              <span className="relative z-10">Shop the Collection</span>
              <span className="absolute inset-0 bg-terracotta opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <a
              href="#mission"
              className="group flex items-center gap-2 rounded-full border-2 border-warm-black/10 px-8 py-4 text-base font-semibold text-warm-black transition-all duration-300 hover:border-peach hover:bg-peach/5"
            >
              Our Mission
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Customer"
                  className="h-10 w-10 rounded-full border-2 border-cream object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-warm-black">
                Loved by 2,000+ customers
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-peach"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-xs text-warm-gray">4.9/5</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-warm-gray-light">
            Scroll
          </span>
          <div className="h-10 w-6 rounded-full border-2 border-warm-gray-light/40 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-2 w-2 rounded-full bg-peach"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
