"use client";

import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";


export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-bg-dark pt-16"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange radial glow */}
      <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-orange-500/10 dark:bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-75 h-75 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-500 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Available for Work
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4"
            >
              <span className="text-gray-900 dark:text-white">Hi, I&apos;m</span>
              <br />
              <span className="text-orange-500">Waqar</span>
              <br />
              <span className="text-gray-900 dark:text-white">Rajpoot</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-2"
            >
              <span className="text-orange-500">Full-Stack</span> Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-sm font-mono text-gray-500 dark:text-gray-500 mb-2"
            >
              MERN · Next.js · TypeScript · MongoDB
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              {personalInfo.tagline}. Turning complex problems into elegant,
              scalable web solutions from{" "}
              <span className="text-orange-500 font-medium">
                {personalInfo.location}
              </span>
              .
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-gray-900 dark:text-white hover:text-orange-500 font-semibold rounded-xl transition-all duration-200 flex items-center gap-2"
              >
                Hire Me
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
                { icon: FaLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — Avatar / Visual */}
          <motion.div
  initial={{ opacity: 0, scale: 0.85, x: 50 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
  className="relative flex justify-center lg:justify-end mt-12 lg:mt-16" // Added Top Margin
>
  {/* Decorative ring container */}
  <div className="relative">
    {/* Rotating Rings */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/30 scale-110"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-orange-500/10 scale-125"
    />

    {/* Enlarged Image Circle */}
    <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-orange-500 orange-glow bg-linear-to-br from-orange-500/20 to-gray-900">
      <Image
        src="/profile.png"
        alt="Waqar Rajpoot - Full Stack Developer"
        fill
        priority
        sizes="(max-width: 640px) 320px, 384px"
        // Changed object-center to object-[center_20%] to pull the face upward
        className="object-cover object-[center_25%]" 
      />
      
      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
    </div>

    {/* Floating badges - Adjusted positioning for larger circle */}
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-2 -right-2 z-10 bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
    >
      Next.js 15 ✦
    </motion.div>
    
    <motion.div
      animate={{ y: [5, -5, 5] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-2 -left-2 z-10 bg-gray-900 dark:bg-gray-800 text-orange-500 text-xs font-bold px-4 py-2 rounded-full border border-orange-500/50 shadow-lg"
    >
      TypeScript ✦
    </motion.div>
  </div>
</motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
