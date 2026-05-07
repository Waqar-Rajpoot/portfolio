"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { MapPin, GraduationCap, Target, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Image container */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="absolute inset-0 bg-orange-500 rounded-3xl translate-x-3 translate-y-3 opacity-20" />
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#1a1a1a] rounded-3xl overflow-hidden aspect-[4/5] border border-gray-200 dark:border-white/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-9xl font-black text-orange-500 opacity-20 mb-4">WR</div>
                  <div className="text-gray-700 dark:text-gray-300 font-bold text-xl">Waqar Rajpoot</div>
                  <div className="text-orange-500 text-sm font-mono mt-1">Full-Stack Developer</div>
                  <div className="mt-6 flex justify-center gap-3 flex-wrap">
                    {["Next.js", "React", "MongoDB", "Node.js"].map((t) => (
                      <span key={t} className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-5 -right-5 bg-orange-500 text-white px-4 py-2 rounded-2xl shadow-xl"
              >
                <div className="text-2xl font-black">3+</div>
                <div className="text-xs font-semibold opacity-90">Yrs Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="text-orange-500 text-sm font-mono font-semibold tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-6">
              Who I Am
            </h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-base">
              {personalInfo.bio}
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: MapPin, label: "Location", value: personalInfo.location },
                { icon: GraduationCap, label: "Education", value: personalInfo.education },
                { icon: Target, label: "Mission", value: personalInfo.mission },
                { icon: Code2, label: "Core Expertise", value: "Next.js Server Actions · Atomic MongoDB Updates · RBAC" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center mt-0.5">
                    <Icon size={14} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">
                      {label}
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200"
            >
              View GitHub Profile →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
