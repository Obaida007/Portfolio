import {  Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Obaida Al Hazzam.</span>
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <Code className="w-5 h-5" />
            <span>React, Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
