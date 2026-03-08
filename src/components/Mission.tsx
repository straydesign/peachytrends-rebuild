"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    number: "01",
    title: "Purpose-Driven",
    accent: "Every item supports a cause.",
    description:
      "Your purchase directly contributes to meaningful change in communities worldwide. Not a percentage — every single piece.",
  },
  {
    number: "02",
    title: "Community First",
    accent: "Families over fear.",
    description:
      "We partner with foundations that prioritize families and community building, creating lasting positive change from the ground up.",
  },
  {
    number: "03",
    title: "Global Impact",
    accent: "No borders, just impact.",
    description:
      "From local communities to international initiatives, your support reaches where it's needed most.",
  },
];

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="relative overflow-hidden py-24 lg:py-32">
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
            className="mt-3 font-heading text-4xl tracking-tight text-warm-black sm:text-5xl lg:text-6xl"
          >
            Fashion That{" "}
            <em className="gradient-text not-italic">Gives Back</em>
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

        {/* Editorial Values — asymmetric staggered layout */}
        <div className="mt-20 grid gap-0 lg:grid-cols-12">
          {/* Value 01 — large, left-aligned with image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative border-t border-warm-black/10 pb-12 pt-8 lg:col-span-7 lg:pr-16"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-heading text-[8rem] leading-none text-peach/10 lg:text-[10rem]">
                01
              </span>
              <div className="relative -top-4">
                <h3 className="font-heading text-3xl text-warm-black sm:text-4xl">
                  {values[0].title}
                </h3>
                <p className="mt-1 font-heading text-lg italic text-terracotta">
                  {values[0].accent}
                </p>
              </div>
            </div>
            <p className="mt-2 max-w-md text-base leading-relaxed text-warm-gray lg:ml-24">
              {values[0].description}
            </p>
          </motion.div>

          {/* Image — right side, overlaps into value 02 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="relative hidden overflow-hidden rounded-2xl lg:col-span-5 lg:row-span-2 lg:block"
          >
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80&auto=format&fit=crop"
              alt="Fashion with purpose"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-black/20 to-transparent" />
          </motion.div>

          {/* Value 02 — indented right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="relative border-t border-warm-black/10 pb-12 pt-8 lg:col-span-7"
          >
            <div className="flex items-baseline gap-4 lg:ml-12">
              <span className="font-heading text-[8rem] leading-none text-peach/10 lg:text-[10rem]">
                02
              </span>
              <div className="relative -top-4">
                <h3 className="font-heading text-3xl text-warm-black sm:text-4xl">
                  {values[1].title}
                </h3>
                <p className="mt-1 font-heading text-lg italic text-terracotta">
                  {values[1].accent}
                </p>
              </div>
            </div>
            <p className="mt-2 max-w-md text-base leading-relaxed text-warm-gray lg:ml-36">
              {values[1].description}
            </p>
          </motion.div>

          {/* Value 03 — full width, centered */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="relative border-t border-warm-black/10 pb-12 pt-8 lg:col-span-12"
          >
            <div className="flex items-baseline gap-4 lg:justify-center">
              <span className="font-heading text-[8rem] leading-none text-peach/10 lg:text-[10rem]">
                03
              </span>
              <div className="relative -top-4">
                <h3 className="font-heading text-3xl text-warm-black sm:text-4xl">
                  {values[2].title}
                </h3>
                <p className="mt-1 font-heading text-lg italic text-terracotta">
                  {values[2].accent}
                </p>
              </div>
            </div>
            <p className="mx-auto mt-2 max-w-md text-center text-base leading-relaxed text-warm-gray">
              {values[2].description}
            </p>
          </motion.div>
        </div>

        {/* Featured Partner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-warm-black to-brown-dark"
        >
          <div className="grid items-center lg:grid-cols-2">
            <div className="p-10 lg:p-14">
              <span className="inline-block rounded-full bg-peach/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-peach-light">
                Featured Partner
              </span>
              <h3 className="mt-5 font-heading text-3xl text-cream">
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
