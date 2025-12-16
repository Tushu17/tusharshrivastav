"use client";

import React from "react";
import { Project } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

export const FeaturedProjectCard = React.memo(function FeaturedProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="col-span-1 md:col-span-2 lg:col-span-3 group relative bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700/50 hover:border-primary/50 shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Content Section */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center z-10 relative">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <h1 className="text-9xl font-bold text-slate-100">01</h1>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider w-fit mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Featured Project
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-slate-300 mb-6 font-display">
            {project.title}
          </h3>

          <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6">
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-primary/25"
              >
                <TbExternalLink size={20} />
                Visit Live Site
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
              >
                <TbBrandGithub size={20} /> View Code
              </Link>
            )}
          </div>
        </div>

        {/* Visuals Section */}
        <div className="flex-1 relative h-[400px] lg:h-auto min-h-[400px] overflow-hidden lg:overflow-visible">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-linear-to-l from-slate-900/0 to-slate-900 lg:w-20 z-10 left-0 h-full pointer-events-none" />

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150%] lg:w-[140%] translate-x-[20%] lg:translate-x-[10%] rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
            {/* PC Image */}
            {project.images?.pc && (
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800 aspect-16/9 ml-auto w-full max-w-4xl">
                <Image
                  src={project.images.pc}
                  alt={`${project.title} Desktop Interface`}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            )}
          </div>

          {/* Mobile Image - Floating */}
          {project.images?.mobile && (
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute bottom-[-10%] right-[10%] lg:right-[15%] w-[25%] lg:w-[28%] max-w-[200px] z-20"
            >
              <div className="relative rounded-4xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-8 border-slate-800 bg-slate-900 aspect-9/19">
                <Image
                  src={project.images.mobile}
                  alt={`${project.title} Mobile Interface`}
                  width={300}
                  height={650}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
});
