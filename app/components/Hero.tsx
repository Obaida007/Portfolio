"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import heroImage from "../assets/me.png"; // صورتك

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Background blobs */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🔥 Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          {/* 🖼️ Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl scale-110" />

            <img
              src={heroImage.src}
              alt="Obaida"
              className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white/30 shadow-2xl"
            />
          </motion.div>

          {/* 📄 Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl uppercase font-black text-white mb-6">
                Obaida Al Hazzam
              </h1>

              <p className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-4">
                Senior Frontend Developer
              </p>

              <p className="text-xl sm:text-2xl text-white/80 mb-6">
                React & Next.js Specialist
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-lg text-white/70 mb-8">
                <MapPin className="w-5 h-5" />
                <span>Dubai, UAE</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/80 mb-12 leading-relaxed"
            >
              Building scalable, high-performance, and SEO-friendly web
              applications. Specializing in enterprise systems, dashboards, and
              production-ready solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all"
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ArrowDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
