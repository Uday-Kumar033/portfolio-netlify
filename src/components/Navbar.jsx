import { useState } from "react";
import { Menu, X, Download, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Freelance", href: "#freelance" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.08] bg-[#080808]/80 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:px-6">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-white">
            UDAY<span className="text-purple-500">.</span>
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Resume Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* View Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
          >
            Resume
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download="Uday-Resume.pdf"
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
          >
            <Download size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-purple-500/30 hover:text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#080808]/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:mx-6 lg:hidden"
          >
            <div className="flex flex-col">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-400 transition-all duration-200 hover:bg-purple-500/10 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

              <div className="my-2 h-px bg-white/[0.06]" />

              {/* Mobile Resume Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {/* View Resume */}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                >
                  <Eye size={16} />
                  View
                </a>

                {/* Download Resume */}
                <a
                  href="/resume.pdf"
                  download="Ayush-Singh-Resume.pdf"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 rounded-xl bg-purple-500 px-3 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-400"
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
