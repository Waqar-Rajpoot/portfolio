"use client";

import { motion } from "framer-motion";
import { Mail, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-[#060606] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black mb-3">
              <span className="text-orange-500">W</span>
              <span className="text-white">aqar</span>
              <span className="text-orange-500">.</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Full-Stack Developer specializing in MERN Stack & Next.js.
              Building scalable, secure, production-ready applications.
            </p>
            <div className="flex items-center gap-1 mt-3 text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">Available for hire</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
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
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              {personalInfo.email}
            </p>
            <p className="text-xs text-gray-500 mt-1">{personalInfo.location}</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Waqar Rajpoot. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Built with <Heart size={11} className="text-orange-500 fill-orange-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
