"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-peach"
            >
              Contact
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-warm-black sm:text-5xl"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg leading-relaxed text-warm-gray"
            >
              Have questions about your order, need help with a refund, or just
              want to say hello? We&apos;re here for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-10 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-peach/10">
                  <svg className="h-5 w-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-warm-gray">Email us</p>
                  <a
                    href="mailto:thepeachytrends@gmail.com"
                    className="font-medium text-warm-black transition-colors hover:text-terracotta"
                  >
                    thepeachytrends@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-peach/10">
                  <svg className="h-5 w-5 text-terracotta" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-warm-gray">Follow us</p>
                  <a
                    href="https://www.instagram.com/thepeachytrends"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-warm-black transition-colors hover:text-terracotta"
                  >
                    @thepeachytrends
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-peach/10 bg-white/60 p-12 text-center backdrop-blur-sm">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peach/10">
                    <svg className="h-8 w-8 text-peach" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-bold text-warm-black">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-warm-gray">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-peach/10 bg-white/60 p-8 backdrop-blur-sm lg:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-warm-black">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-xl border border-peach/15 bg-cream/50 px-4 py-3 text-warm-black placeholder:text-warm-gray-light focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-warm-black">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-xl border border-peach/15 bg-cream/50 px-4 py-3 text-warm-black placeholder:text-warm-gray-light focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/20"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-warm-black">
                    Subject
                  </label>
                  <select className="w-full rounded-xl border border-peach/15 bg-cream/50 px-4 py-3 text-warm-black focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/20">
                    <option>General Inquiry</option>
                    <option>Order Question</option>
                    <option>Refund Request</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-warm-black">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full resize-none rounded-xl border border-peach/15 bg-cream/50 px-4 py-3 text-warm-black placeholder:text-warm-gray-light focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/20"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-warm-black py-3.5 font-semibold text-cream transition-all duration-300 hover:bg-terracotta"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
