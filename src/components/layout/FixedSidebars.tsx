"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandFacebook,
} from "react-icons/tb";

export function FixedSidebars() {
  const socialLinks = [
    { icon: TbBrandGithub, href: "https://github.com/lordarcadius" }, // Ideally fetch from portfolioData
    { icon: TbBrandInstagram, href: "#" },
    { icon: TbBrandTwitter, href: "#" },
    { icon: TbBrandLinkedin, href: "#" },
    { icon: TbBrandFacebook, href: "#" },
  ];

  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 left-6 hidden xl:flex flex-col items-center gap-6 z-50 text-slate-400"
      >
        <ul className="flex flex-col gap-6">
          {portfolioData.social.map((link, index) => {
            // Mapping standard icons based on platform name for simplicity in this fixed bar
            let Icon = TbBrandGithub;
            if (link.platform.toLowerCase().includes("linkedin"))
              Icon = TbBrandLinkedin;
            if (
              link.platform.toLowerCase().includes("twitter") ||
              link.platform.toLowerCase().includes("x")
            )
              Icon = TbBrandTwitter;
            if (link.platform.toLowerCase().includes("instagram"))
              Icon = TbBrandInstagram;
            if (link.platform.toLowerCase().includes("facebook"))
              Icon = TbBrandFacebook;
            // We skip email here as it goes on the right
            if (link.platform.toLowerCase().includes("email")) return null;

            return (
              <li key={index}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary hover:-translate-y-1 transition-all duration-300 block p-1"
                >
                  <Icon size={22} />
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>

      {/* Right Sidebar - Email */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 right-6 hidden xl:flex flex-col items-center gap-6 z-50 text-slate-400"
      >
        <a
          href={`mailto:tusharshrivastav1711@gmail.com`}
          className="vertical-text text-sm font-mono tracking-widest hover:text-primary hover:-translate-y-1 transition-all duration-300 mb-4"
          style={{ writingMode: "vertical-rl" }}
        >
          tusharshrivastav1711@gmail.com
        </a>
        <div className="w-[1px] h-24 bg-slate-400/50"></div>
      </motion.div>
    </>
  );
}
