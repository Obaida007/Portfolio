"use client";

import { motion } from 'framer-motion'; import { useRef } from 'react';
import { Briefcase, MapPin } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);

  const experiences = [
    {
      period: '2023 - 03/2026',
      title: 'Front-End Developer',
      company: 'TWH Technologies',
      location: 'Dubai, UAE',
      responsibilities: [
        'Developed high-performance web applications using React.js with scalable and modular architecture',
        'Translated UI/UX wireframes into responsive, interactive interfaces',
        'Integrated RESTful APIs to ensure seamless and optimized data communication',
        'Built a CMS-style website for the company\'s interior design division, enabling full management of services, content, and gallery images',
        'Contributing to the development of an Interior Design Management System supporting task assignment, project tracking, cost estimation, and lightweight accounting',
        'Implemented Stripe payment integration supporting all payment types and methods'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      period: '2022 - 2023',
      title: 'Front-End Developer',
      company: 'Al Sahil Company',
      location: 'Homs, Syria',
      responsibilities: [
        'Developed comprehensive accounting and business management systems using React.js',
        'Built dashboards and workflows tailored to business requirements',
        'Created a pharmaceutical management platform with advanced search and filtering capabilities',
        'Ensured UI performance, responsiveness, and cross-browser compatibility'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50">
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
              Experience
            </h2>
            <p className="text-xl text-gray-600">
              My professional journey and career highlights
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${exp.color} text-white font-bold text-sm mb-4`}>
                      {exp.period}
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span className="font-bold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-700 flex items-start gap-3">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
