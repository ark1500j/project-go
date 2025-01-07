// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState, MouseEventHandler } from "react";

// Define the Footer component
const Footer: React.FC = () => {
  const [, setHoveredSocial] = useState<string | null>(null);

  return (
    <footer className="border-t border-white/10 bg-background relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text hover:scale-105 transition-transform cursor-pointer">
              BoardAndGo
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@boardandgo.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <MailIcon className="w-4 h-4 group-hover:text-accent-purple transition-colors" />
                <span className="text-sm sm:text-base">
                  contact@boardandgo.com
                </span>
              </a>
              <a
                href="tel:+12316255322"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
              >
                <PhoneIcon className="w-4 h-4 group-hover:text-accent-purple transition-colors" />
                <span className="text-sm sm:text-base">+ 1 (231) 625-5322</span>
              </a>
              <a
                href="https://www.linkedin.com/company/boardandgo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 group"
                onMouseEnter={() => setHoveredSocial("LinkedIn")}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <LinkedInIcon className="w-4 h-4 group-hover:text-accent-purple transition-colors" />
                <span className="text-sm sm:text-base">
                  Follow us on LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {["Company", "Product", "Help Center"].map((section) => (
            <div key={section} className="col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 gradient-text">
                {section}
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {getLinksForSection(section).map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-purple/50 group-hover:scale-150 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors text-center">
            © 2025 BoardAndGo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper function to get links for each section
const getLinksForSection = (section: string): string[] => {
  switch (section) {
    case "Company":
      return ["About", "Blog", "Careers", "Press"];
    case "Product":
      return ["Features", "Pricing", "API", "Documentation"];
    case "Help Center":
      return ["Support", "Terms", "Privacy", "Cookie Policy"];
    default:
      return [];
  }
};

// Icon components with proper typings for the className prop
interface IconProps {
  className: string;
}

const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default Footer;
