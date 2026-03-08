"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Sarah M.",
    text: "I love knowing that my purchase is making a difference. The quality is incredible — this hoodie is my new favorite.",
    product: "Purpose Hoodie",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Marcus J.",
    text: "Finally a brand that actually walks the talk. Transparent about where the money goes. The Fuerza Tee fits perfectly.",
    product: "Fuerza Signature Tee",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Aisha K.",
    text: "Bought one for me and one for my sister. The material is soft, the design is clean, and the cause is real. 10/10.",
    product: "Impact Crewneck",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "David R.",
    text: "Wore the cap to a community event and got so many compliments. Love repping a brand with heart.",
    product: "Community Cap",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=face",
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-dark/30 to-transparent" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-peach"
          >
            Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-warm-black sm:text-5xl"
          >
            What Our{" "}
            <span className="gradient-text">Community</span> Says
          </motion.h2>
        </div>

        {/* Review Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group rounded-2xl border border-peach/10 bg-white/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-peach/20 hover:shadow-lg hover:shadow-peach/5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, j) => (
                  <svg
                    key={j}
                    className="h-4 w-4 text-peach"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-base leading-relaxed text-warm-gray">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-warm-black">
                    {review.name}
                  </p>
                  <p className="text-xs text-warm-gray-light">
                    Purchased: {review.product}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://judge.me/reviews/2610d8.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-terracotta transition-colors hover:text-peach-dark"
          >
            Leave a Review
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
