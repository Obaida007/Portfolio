"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import kriechImage from "../assets/kriech.png";
import alhammadiImage from "../assets/alhammadi.png";
import twhmenuImage from "../assets/twhmenu1.png";
import twhMobileImage from "../assets/twhMobile.png";
import alSahilAccountingImage from "../assets/alsahil_logo.png";
import nafnofDashboardImage from "../assets/nafnof.png";

export function Projects() {
  const ref = useRef(null);

  const projects = [
    {
      title: "Krish Restaurant",
      subtitle: "Menu & Management System",
      location: "UAE",
      description:
        "Complete restaurant management dashboard with dynamic menu customization, order tracking, and multi-operation support.",
      features: [
        "Built dynamic menu customization tools and item management interface",
        "Integrated real-time order tracking with Firebase",
        "Designed workflows for Dine-In, Takeaway, and Delivery operations",
        "Created wallet UI for customer credits and discount usage",
        "Integrated Network payment gateway for secure electronic payments",
      ],
      tags: [
        "React.js",
        "Firebase",
        "Laravel API",
        "PHP",
        "MySQL",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "REST APIs",
        "Network Payment",
      ],
      impact:
        "Streamlined restaurant operations with real-time tracking and comprehensive management tools",
      image: kriechImage,
      color: "from-red-500 to-rose-500",
      links: [
        { label: "Visit Website", url: "https://krieshrestaurant.com/" },
        { label: "View Menu", url: "https://krieshrestaurant.com/branches/1" },
      ],
    },
    {
      title: "TWH Menu",
      subtitle: "Digital Menu System",
      location: "UAE",
      description:
        "Multi-tenant digital menu system for restaurants with centralized dashboard and automated operations. Supports multiple clients with tenant-based architecture.",
      features: [
        "Developed dynamic digital menu supporting item tags, variations, and branch-level customization",
        "Built centralized dashboard for menu, category, and media management",
        "Automated menu update operations, improving efficiency by 30%",
        "Multi-tenant architecture supporting multiple restaurant clients from a single platform",
        "Integrated Stripe payment gateway supporting all payment types and methods",
      ],
      tags: [
        "React.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "REST APIs",
        "Stripe",
      ],
      impact:
        "30% improvement in menu management efficiency with automated operations",
      image: twhmenuImage,
      color: "from-purple-500 to-pink-500",
      links: [{ label: "Visit Website", url: "https://twhmenu.com" }],
    },
    {
      title: "TWH Interiors",
      subtitle: "Website & CMS",
      location: "UAE",
      description:
        "Professional interior design and furniture portfolio website with advanced admin dashboard for managing services, projects, images, and PDF catalogs.",
      features: [
        "Comprehensive CMS admin panel for services, projects, and images management",
        "Advanced image gallery with lazy loading, infinite scroll, and progressive loading",
        "PDF catalog upload and compression (up to 200MB) with QR code generation",
        "Full bilingual support (Arabic/English) with RTL/LTR layout",
        "SEO optimized with dynamic meta tags, structured data, and sitemap generation",
        "Secure authentication system with password hashing and session management",
      ],
      tags: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "SQLite",
        "Express.js",
        "Passport.js",
        "Sharp",
        "React Query",
      ],
      impact:
        "Professional portfolio platform with comprehensive content management and optimized performance",
      image: twhMobileImage,
      color: "from-green-500 to-teal-500",
      links: [{ label: "Visit Website", url: "https://twhuae.com/" }],
    },
    {
      title: "Al Hammadi Aluminium",
      subtitle: "Website & CMS",
      location: "UAE",
      description:
        "Professional portfolio website for aluminum doors, kitchens, cabinets, and canopies manufacturer with full bilingual support (Arabic/English) and integrated CMS.",
      features: [
        "Full bilingual support (Arabic/English) with RTL/LTR layout switching",
        "Advanced image gallery with Masonry Layout and lazy loading",
        "Interactive Swiper carousel with center focus effect and RTL support",
        "Comprehensive CMS admin panel for managing services, images, and content",
        "SEO optimized with meta tags, structured data, and sitemap",
        "Performance optimized with code splitting, image optimization, and lazy loading",
      ],
      tags: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "PostgreSQL",
        "Express.js",
        "React Query",
        "Embla Carousel",
      ],
      impact:
        "Professional bilingual portfolio with seamless content management and optimized performance",
      image: alhammadiImage,
      color: "from-yellow-500 to-orange-500",

      links: [{ label: "Visit Website", url: "https://alhammadiint.com/" }],
    },
    {
      title: "TWH Mobile",
      subtitle: "Task & Project Management App",
      location: "UAE",
      description:
        "Production-ready React Native mobile application for task and project management with team collaboration, real-time notifications, and role-based access control.",
      features: [
        "Comprehensive task and project management with progress tracking (0-100%)",
        "Team collaboration with multi-team assignments, comments, and image attachments",
        "Real-time push notifications for iOS and Android platforms",
        "Full bilingual support (Arabic/English) with RTL/LTR layout switching",
        "Role-based access control (Admin, Team User, Accountant) with dynamic UI",
        "Dashboard analytics with admin and team-specific views and date filtering",
        "17 screens with 20+ reusable components and 30+ API endpoints integration",
      ],
      tags: [
        "React Native",
        "Expo SDK",
        "TypeScript",
        "React Query",
        "i18next",
        "React Navigation",
        "EAS Build",
      ],
      impact:
        "Production-ready mobile app with cross-platform push notifications and comprehensive task management",
      image: twhMobileImage,
      color: "from-indigo-500 to-purple-500",
      links: [],
    },
    {
      title: "Nafnof Dashboard",
      subtitle: "Order & Sales Management System",
      location: "UAE",
      description: `Order, sales, and financial management system for tailoring and fashion businesses with real-time dashboards and payment tracking.
 Key Responsibilities & Achievements
Developed complete order lifecycle management with multiple statuses
Built multi-payment system with automatic paid and remaining balance calculation
Implemented role-based access control with restricted financial visibility
Built product, inventory, and customer measurement management modules
Developed real-time dashboards with charts, KPIs, and PDF report exports
Delivered full bilingual support using modern internationalization tools`,
      features: [],
      tags: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
        "API Integration",
        "Internationalization",
        "Dashboard",
      ],
      impact:
        "Order, sales, and financial management system for tailoring and fashion businesses with real-time dashboards and payment tracking",
      image: nafnofDashboardImage,
      color: "from-cyan-500 to-blue-500",
      links: [],
    },
    {
      title: "Al Sahil Accounting",
      subtitle: "Web Application",
      location: "Syria",
      description:
        "Comprehensive accounting and financial management system with real-time analytics and secure API integration.",
      features: [
        "Built interfaces for accounts, invoices, analytics, and financial reporting",
        "Integrated real-time dashboards to enhance business decision-making",
        "Ensured secure and efficient API communication using Axios and Node.js backend",
      ],
      tags: ["React.js", "Axios", "REST APIs"],
      impact:
        "Enhanced business decision-making with real-time financial insights and analytics",
      image: alSahilAccountingImage,
      color: "from-blue-500 to-cyan-500",
      links: [],
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
              Selected Projects
            </h2>
            <p className="text-xl text-gray-600">
              Real-world projects delivering measurable business impact
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <ImageWithFallback
                      src={project.image }
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent`}
                    />
                    <div />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-gray-900 font-bold text-sm">
                        {project.location}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <h3 className="text-3xl font-black text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p
                        className={`text-lg font-bold bg-linear-to-r ${project.color} text-transparent bg-clip-text mb-4`}
                      >
                        {project.subtitle}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="text-gray-700 text-sm flex items-start gap-2"
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${project.color} mt-2 shrink-0`}
                            />{" "}
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 6 && (
                        <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-500 border border-gray-200">
                          +{project.tags.length - 6} more
                        </span>
                      )}
                    </div>

                    {/* Impact */}
                    <div
                      className={`bg-linear-to-r ${project.color} bg-opacity-10 rounded-2xl p-4 mb-6`}
                    >
                      <p className="text-sm font-bold text-gray-900">
                        <span className="text-gray-600">Impact:</span>{" "}
                        {project.impact}
                      </p>
                    </div>

                    {/* Links */}
                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <motion.a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-5 py-2.5 bg-linear-to-r ${project.color} text-white rounded-full font-medium text-sm shadow-lg`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {link.label}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
