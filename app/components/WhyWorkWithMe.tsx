"use client";

import { motion } from 'framer-motion';
import { Code2, Users, Zap, Lightbulb } from 'lucide-react';
import { useRef } from 'react';

export function WhyWorkWithMe() {
  const ref = useRef<HTMLDivElement>(null);

  const reasons = [
    {
      icon: Code2,
      title: 'Clean, Maintainable Code',
      description: 'I write code that\'s easy to read, test, and scale. Strong emphasis on TypeScript, proper architecture, and documentation.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Strong Collaboration',
      description: 'Experienced working with designers, product managers, and backend engineers. Clear communication and proactive problem-solving.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Performance-First Mindset',
      description: 'Obsessed with Core Web Vitals, bundle optimization, and delivering fast user experiences. Every millisecond matters.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Lightbulb,
      title: 'Product & UX Focus',
      description: 'Beyond just implementation, I think about the "why". I contribute to product discussions and advocate for better UX.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="why" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Why Work With Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What I bring to your team beyond technical skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
