"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Newsletter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-peach/10 via-cream-dark/50 to-peach/10" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-peach/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, -3, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-terracotta/10 blur-3xl"
      />

      <div ref={ref} className="relative mx-auto max-w-2xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-peach">
            Stay Connected
          </span>
          <h2 className="mt-3 font-heading text-3xl  text-warm-black sm:text-4xl">
            Join the Movement
          </h2>
          <p className="mt-4 text-warm-gray">
            Get early access to new drops, behind-the-scenes stories from our
            foundation partners, and exclusive member-only deals.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-peach/10 px-6 py-4 text-terracotta"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">
                Welcome to the Peachy fam!
              </span>
            </motion.div>
          ) : (
            <>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 rounded-full border border-peach/20 bg-white/80 px-6 py-4 text-warm-black placeholder:text-warm-gray-light focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/20 sm:rounded-r-none"
              />
              <button
                type="submit"
                className="rounded-full bg-warm-black px-8 py-4 font-semibold text-cream transition-all duration-300 hover:bg-terracotta sm:rounded-l-none"
              >
                Subscribe
              </button>
            </>
          )}
        </motion.form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-4 text-xs text-warm-gray-light"
        >
          No spam. Just purpose. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
