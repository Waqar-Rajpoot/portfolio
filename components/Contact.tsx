"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat with me", href: `https://wa.me/${personalInfo.whatsapp}?text=Hi%20Waqar!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.` },
  ];

  const socials = [
    { icon: FaGithub, label: "GitHub", href: personalInfo.github },
    { icon: FaLinkedin, label: "LinkedIn", href: personalInfo.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 text-sm font-mono font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mt-2 mb-4">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full" />
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let&apos;s build something amazing together.
            Reach out and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Let&apos;s work together
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                I&apos;m currently open to new opportunities — freelance projects,
                full-time roles, or exciting collaborations. Whether you need a
                complete web application or want to discuss a technical
                challenge, I&apos;m here.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-[#111] rounded-xl border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider font-semibold mb-0.5">
                      {label}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-orange-500 transition-colors">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social icons */}
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}

                {/* WhatsApp */}
                <motion.a
                  href={`https://wa.me/${personalInfo.whatsapp}?text=Hi%20Waqar!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all duration-200 shadow-lg shadow-green-500/20"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-white/5 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-200 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/30 transition-all duration-200 text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(249,115,22,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                {submitted ? "Message Sent! ✓" : (<><Send size={16} /> Send Message</>)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
