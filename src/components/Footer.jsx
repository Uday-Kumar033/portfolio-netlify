import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              UDAY<span className="text-purple-400">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Cloud & DevOps enthusiast focused on building scalable cloud
              infrastructure, automated deployments, and containerized
              applications.
            </p>

            <a
              href="mailto:udaysinghpagurkothi@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-400"
            >
              <Mail size={16} />
              udaysinghpagurkothi@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Quick Links
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <a
                href="#home"
                className="text-gray-500 transition-colors hover:text-purple-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-500 transition-colors hover:text-purple-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-gray-500 transition-colors hover:text-purple-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                className="text-gray-500 transition-colors hover:text-purple-400"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="text-gray-500 transition-colors hover:text-purple-400"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="text-gray-500 transition-colors hover:text-purple-400"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
              Let's Connect
            </h3>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
              Interested in cloud, DevOps, or technology opportunities? Feel
              free to connect with me and let's discuss.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/Uday-Kumar033"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/uday-kumar-"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-gray-600">
            © {currentYear} Uday Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-gray-600">
              Built with <span className="text-purple-400">React</span>
            </p>

            {/* Back To Top */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-500 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-purple-400"
            >
              <ArrowUp
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;