"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind",
        "shadcn/ui",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend",
      skills: ["PHP", "Laravel", "MySQL"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "State Management",
      skills: ["Zustand", "Redux Toolkit", "React Query", "Context API"],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Performance & SEO",
      skills: ["SSR", "ISR", "Core Web Vitals", "Lighthouse", "Code Splitting"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Tools & Integration",
      skills: [
        "REST APIs",
        "Git",
        "Firebase",
        "Bitbucket",
        "CI/CD",
        "CMS dashboards",
        "Framer Motion",
        "GraphQL",
        "Stripe",
        "Network Payment",
        "i18n",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Testing",
      skills: ["Jest", "React Testing Library"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Deployment",
      skills: ["Vercel", "AWS", "Docker"],
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50">
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
              Skills & Tech Stack
            </h2>
            <p className="text-xl text-gray-600">
              Technologies and tools I use to build exceptional products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white font-bold mb-6`}
                >
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
