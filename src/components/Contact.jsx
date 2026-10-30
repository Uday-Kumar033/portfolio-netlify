import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "918709511013";

    const whatsappMessage = `New Portfolio Contact

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    // Show success popup
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    // Automatically close popup
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500"></span>

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Contact
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let's build something{" "}
            <span className="text-purple-400">great.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            Have a project, opportunity or just want to connect? Feel free to
            reach out. I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Layout */}

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]"></div>

            <div className="relative">
              <span className="text-sm uppercase tracking-[0.2em] text-gray-600">
                Get in touch
              </span>

              <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                Let's talk.
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                I'm always open to discussing new projects, development
                opportunities and interesting ideas.
              </p>

              {/* Contact Details */}

              <div className="mt-10 space-y-6">
                {/* Email */}

                <a
                  href="mailto:udaysinghpagurkothi@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-purple-400 transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Email
                    </p>

                    <p className="mt-1 text-sm text-gray-300 transition-colors group-hover:text-purple-400 sm:text-base">
                      udaysinghpagurkothi@gmail.com
                    </p>
                  </div>
                </a>

                {/* Phone */}

                <a
                  href="tel:+918709511013"
                  className="group flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-purple-400 transition-all duration-300 group-hover:border-purple-500/30 group-hover:bg-purple-500/10">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Phone
                    </p>

                    <p className="mt-1 text-sm text-gray-300 transition-colors group-hover:text-purple-400 sm:text-base">
                      +91 87095 11013
                    </p>
                  </div>
                </a>

                {/* Location */}

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-purple-400">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-gray-300 sm:text-base">
                      Siwan, Bihar, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}

              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-600">
                  Connect with me
                </p>

                <div className="flex items-center gap-3">
                  {/* GitHub */}

                  <a
                    href="https://github.com/Uday-Kumar033"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                  >
                    <FaGithub size={18} />
                  </a>

                  {/* LinkedIn */}

                  <a
                    href="https://www.linkedin.com/in/uday-kumar-70143a292/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                  >
                    <FaLinkedinIn size={17} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 sm:p-9 lg:p-10"
          >
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-600/[0.08] blur-[130px]"></div>

            <form onSubmit={handleSubmit} className="relative">
              {/* Name + Email */}

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/[0.03]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/[0.03]"
                  />
                </div>
              </div>

              {/* Phone */}

              <div className="mt-6">
                <label className="mb-2 block text-sm text-gray-400">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/[0.03]"
                />
              </div>

              {/* Message */}

              <div className="mt-6">
                <label className="mb-2 block text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="7"
                  required
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-purple-500/50 focus:bg-white/[0.03]"
                ></textarea>
              </div>

              {/* Submit */}

              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-purple-400"
              >
                Send Message

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="mt-4 text-center text-xs text-gray-600">
                Your message will be sent through WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-white/10 bg-white/[0.02] px-6 py-6 sm:flex-row sm:px-8"
        >
          <p className="text-sm text-gray-500">
            Looking for a developer for your next project?
          </p>

          <a
            href="https://wa.me/918709511013"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
          >
            Let's connect
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* SUCCESS POPUP */}

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 left-1/2 z-[9999] w-[calc(100%-32px)] max-w-md -translate-x-1/2"
          >
            <div className="flex items-center gap-4 rounded-2xl border border-green-500/20 bg-[#111111]/95 px-5 py-4 shadow-2xl backdrop-blur-xl">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <CheckCircle2 size={23} />
              </div>

              <div className="flex-1">
                <p className="font-semibold text-white">
                  Message sent successfully!
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  WhatsApp has been opened with your message.
                </p>
              </div>

              <button
                onClick={() => setShowSuccess(false)}
                className="text-gray-500 transition-colors hover:text-white"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;