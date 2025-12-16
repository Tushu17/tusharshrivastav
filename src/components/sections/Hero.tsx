"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export const HeroSection = React.memo(function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20"
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-primary font-mono mb-6 text-lg tracking-wide ml-1">
            Hi, my name is
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-200 tracking-tight leading-none mb-4">
            {portfolioData.name}.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-400 tracking-tight leading-tight mb-8">
            I create visually pleasing <br className="hidden md:block" />
            interfaces for the web.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-lg text-slate-400 mb-12 leading-relaxed">
            I&apos;m a passionate{" "}
            <span className="text-primary">
              Web Developer & Client Coordinator
            </span>{" "}
            with hands-on experience in building web applications and Ai
            automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase">
            I'm always available for intriguing projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
});
