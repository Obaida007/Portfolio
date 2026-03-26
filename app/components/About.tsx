"use client";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Award, Zap, Building2, Code } from 'lucide-react';

export function About() {
  const ref = useRef(null);

  const highlights = [
    { 
      icon: Award, 
      title: '6+ years experience', 
      color: 'bg-blue-500' 
    },
    { 
      icon: Zap, 
      title: 'Performance-driven development', 
      color: 'bg-purple-500' 
    },
    { 
      icon: Building2, 
      title: 'Enterprise & real-world systems', 
      color: 'bg-yellow-500' 
    },
    { 
      icon: Code, 
      title: 'Scalable architecture focus', 
      color: 'bg-pink-500' 
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-left">
              <p>
                I&apos;m a <span className="font-bold text-purple-600">Senior Frontend Developer</span> based in Dubai, UAE, with <span className="font-bold">6+ years of experience</span> building scalable, high-performance, and SEO-friendly web applications using React, Next.js, and TypeScript.
              </p>
              <p>
                I specialize in creating clean UI architectures and scalable systems for enterprise applications, dashboards, and CMS platforms. My work focuses on delivering production-ready solutions that prioritize performance, maintainability, and user experience.
              </p>
              <p>
                I&apos;ve worked on real-world business applications across the UAE and GCC region, collaborating with cross-functional teams to solve complex technical challenges and deliver measurable results.
              </p>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className={`w-20 h-20 ${highlight.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <highlight.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-base font-bold text-gray-900 leading-snug px-2">
                  {highlight.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
