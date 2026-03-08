"use client";

import { motion } from "framer-motion";

const items = [
  "PURPOSE-DRIVEN",
  "ETHICAL FASHION",
  "COMMUNITY FIRST",
  "100% TRANSPARENT",
  "GLOBAL IMPACT",
  "WEAR YOUR VALUES",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-peach/10 bg-warm-black py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-4 text-sm font-medium tracking-[0.2em] text-cream/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-peach" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
