"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { TbMail, TbMapPin } from "react-icons/tb";

export const ContactSection = React.memo(function ContactSection() {
  return (
    <section id="contact" className="pt-10 pb-20 bg-slate-950/50">
      <div className="container mx-auto px-4 xl:px-24">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together"
          center={false}
        />

        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-13"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-100">
                Let&apos;s talk about your next project
              </h3>
              <p className="text-slate-400">
                Feel free to reach out for collaborations, freelance projects,
                or full-time opportunities. I&apos;d be happy to hear from you.
                Contact me directly via email to connect.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.social
                  .find((s) => s.platform === "Email")
                  ?.url.replace("mailto:", "")}`}
                className="flex items-center gap-4 text-slate-300 hover:text-primary transition-colors p-4 bg-slate-800/30 rounded-xl border border-slate-800"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <TbMail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email me at</p>
                  <p className="font-medium">
                    {portfolioData.social
                      .find((s) => s.platform === "Email")
                      ?.url.replace("mailto:", "")}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-slate-300 p-4 bg-slate-800/30 rounded-xl border border-slate-800">
                <div className="bg-secondary/10 p-3 rounded-full text-secondary">
                  <TbMapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Based in</p>
                  <p className="font-medium">Delhi, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
