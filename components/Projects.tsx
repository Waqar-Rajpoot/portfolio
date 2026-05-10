"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";
import { FaGithub, } from "react-icons/fa";


const categories = ["All", "Full-Stack", "Auth", "Community"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 text-sm font-mono font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-4">
            Portfolio
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Production-ready projects solving real-world problems with modern
            full-stack technologies.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 flex-wrap mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-orange-500/10 hover:text-orange-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 bg-gray-50 dark:bg-bg-dark rounded-2xl border border-gray-100 dark:border-white/5 hover:border-orange-500/40 transition-all duration-300 flex flex-col shadow-sm hover:shadow-orange-500/10 hover:shadow-xl"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-orange-500/10 text-orange-500 text-xs font-bold px-2 py-0.5 rounded-full border border-orange-500/20">
                    <Star size={10} fill="currentColor" />
                    Featured
                  </div>
                )}

                {/* Category pill */}
                <span className="inline-block mb-3 text-xs font-bold text-orange-500 uppercase tracking-widest font-mono">
                  {project.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-xs rounded-md font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 border border-gray-200 dark:border-white/10 hover:border-orange-500/50 text-gray-700 dark:text-gray-400 hover:text-orange-500 text-sm font-semibold rounded-xl transition-all duration-200"
                  >
                    <FaGithub size={14} />
                    Code
                  </motion.a>
                  {project.live !== "#" && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all duration-200"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Waqar-Rajpoot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(249,115,22,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-orange-500/50 hover:border-orange-500 text-orange-500 font-bold rounded-xl transition-all duration-200 hover:bg-orange-500/10"
          >
            <FaGithub size={18} />
            See All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
