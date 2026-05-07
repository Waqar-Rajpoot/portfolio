"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 text-sm font-mono font-semibold tracking-widest uppercase">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-4">
            Tech Stack
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            My professional toolkit for building robust, scalable, and
            beautiful web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(techStack).map(([category, techs], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-5 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-all duration-300"
            >
              <h3 className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-3 font-mono">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.08 }}
                    className="px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-white/5 hover:border-orange-500/40 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
