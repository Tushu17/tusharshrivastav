"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";

export const AboutSection = React.memo(function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <SectionHeading title="About Me" subtitle="" center={false} />

        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-slate-400 text-lg leading-relaxed space-y-6"
          >
            <p>
              Hi, my name is {portfolioData.name}, a {portfolioData.role}.{" "}
              {portfolioData.about}
            </p>
            <p>
              Fast-forward to today, and I&apos;ve had the privilege of working
              at various organizations, building accessible, inclusive products
              and digital experiences for a variety of clients.
            </p>
            <p>
              My main focus these days is building accesible, inclusive products
              and digital experiences at{" "}
              <span className="text-primary">
                {portfolioData.experience[0]?.company || "Sahindia Tech"}
              </span>{" "}
              for a variety of clients.
            </p>

            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
              {portfolioData.skills.frontend.slice(0, 4).map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">▹</span> {skill}
                </li>
              ))}
              {portfolioData.skills.backend.slice(0, 4).map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary">▹</span> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group shrink-0 mx-auto md:mx-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Border Frame */}
              <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

              {/* Image Container */}
              <div className="absolute inset-0 bg-primary/20 rounded overflow-hidden group-hover:bg-transparent transition-colors duration-300">
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={portfolioData.profileImage}
                    alt={portfolioData.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
