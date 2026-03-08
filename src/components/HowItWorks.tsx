"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Shop with Purpose",
    description:
      "Browse our collection of thoughtfully designed apparel, each tied to a specific cause and foundation.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Donate",
    description:
      "A percentage of every purchase goes directly to the foundation featured with that collection. Full transparency, always.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Create Change",
    description:
      "Your purchase helps fund programs that strengthen families and communities worldwide. Real impact, real people.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="relative overflow-hidden bg-warm-black py-24 lg:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(232,146,124,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(196,112,74,0.2),transparent_50%)]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-peach"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-cream sm:text-5xl"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-lg text-cream/60"
          >
            When you shop with Peachy Trends, you&apos;re not just buying
            clothing — you&apos;re joining a movement.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="group relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-peach/30 to-transparent lg:block" />
              )}

              <div className="relative rounded-2xl border border-cream/5 bg-cream/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-peach/20 hover:bg-cream/[0.06]">
                {/* Number */}
                <span className="font-[family-name:var(--font-heading)] text-5xl font-bold text-peach/20 transition-colors duration-300 group-hover:text-peach/40">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-peach/10 text-peach transition-all duration-300 group-hover:bg-peach/20 group-hover:scale-110">
                  {step.icon}
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-heading)] text-xl font-bold text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8">
          {[
            { value: "100%", label: "Transparent Giving" },
            { value: "2,000+", label: "Customers Served" },
            { value: "$25K+", label: "Donated to Date" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-heading)] text-3xl font-bold text-peach sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <p className="mt-2 text-sm text-cream/40">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
