"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Purpose-Driven",
    description:
      "Every item in our collection supports a cause. Your purchase directly contributes to meaningful change in communities worldwide.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Community First",
    description:
      "We partner with foundations that prioritize families and community building, creating lasting positive change from the ground up.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global Impact",
    description:
      "From local communities to international initiatives, your support reaches where it's needed most — no borders, just impact.",
  },
];

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-peach/5 blur-3xl" />

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-peach"
          >
            Our Mission
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-warm-black sm:text-5xl"
          >
            Fashion That{" "}
            <span className="gradient-text">Gives Back</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mt-5 text-lg leading-relaxed text-warm-gray"
          >
            Peachy Trends was born from a simple belief: clothing can be more
            than just fabric. We partner with foundations doing meaningful work,
            donating a portion of every sale to causes that matter.
          </motion.p>
        </div>

        {/* Value cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl border border-peach/10 bg-white/60 p-8 backdrop-blur-sm transition-all duration-500 hover:border-peach/30 hover:shadow-xl hover:shadow-peach/5"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-peach/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-peach/10" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-peach/10 text-terracotta transition-colors duration-300 group-hover:bg-peach/20">
                  {value.icon}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl font-bold text-warm-black">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-warm-black to-brown-dark"
        >
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span className="inline-block rounded-full bg-peach/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-peach-light">
                Featured Partner
              </span>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold text-cream">
                Fuerza Foundation
              </h3>
              <p className="mt-4 text-base leading-relaxed text-cream/70">
                Our current collection supports the Fuerza Foundation, dedicated
                to strengthening families and communities through legal aid,
                reunification support, and essential resources. A portion of
                every purchase goes directly to their mission.
              </p>
              <a
                href="https://fuerza-foundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-peach px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-peach-dark hover:gap-3"
              >
                Learn About Fuerza
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="relative h-64 lg:h-full lg:min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80&auto=format&fit=crop"
                alt="Community support"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-warm-black/60 to-transparent lg:from-warm-black/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
