import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Cloud,
  Sparkles,
  ChevronDown,
  Cpu,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const roles = [
  "Cloud & DevOps Engineer",
  "Cloud Computing Student",
  "DevOps Enthusiast",
  "Cloud Infrastructure Developer",
];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8 lg:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[5%] top-[15%] h-[350px] w-[350px] rounded-full bg-purple-600/[0.08] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-[300px] w-[300px] rounded-full bg-purple-700/[0.06] blur-[120px]" />

      {/* Main */}
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Small Intro */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-purple-500" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[58px] font-bold leading-[0.9] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[92px]"
          >
            UDAY
            <br />
            <span className="bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
              KUMAR
            </span>
          </motion.h1>

          {/* Role */}
          <div className="mt-8 flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 sm:h-11 sm:w-11">
              <Cloud
                size={20}
                strokeWidth={1.7}
                className="text-purple-400"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[9px] uppercase tracking-[0.25em] text-gray-600">
                Currently building
              </p>

              {/* Important mobile fix */}
              <div className="relative min-h-[32px] w-full overflow-hidden sm:min-h-[38px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roles[roleIndex]}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="w-full"
                  >
                    <p className="break-words text-[18px] font-semibold leading-7 tracking-tight text-purple-300 sm:text-2xl">
                      {roles[roleIndex]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:mt-7 sm:text-base sm:leading-8"
          >
            I build and deploy scalable cloud infrastructure using AWS,
            Microsoft Azure, and GCP. I work with Docker, Kubernetes, Terraform,
            CI/CD, Linux, and Infrastructure as Code to create reliable and
            automated cloud environments.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] sm:w-auto"
            >
              View Projects

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-gray-400 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white sm:w-auto"
            >
              <Sparkles size={16} className="text-purple-400" />
              Let's Connect
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-9 flex items-center gap-3"
          >
            {/* GitHub */}
            <a
              href="https://github.com/Uday-Kumar033"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              <FaLinkedinIn size={17} />
            </a>

            {/* Email */}
            <a
              href="mailto:udaysinghpagurkothi@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              <FiMail size={17} />
            </a>

            <div className="ml-2 h-px w-8 bg-white/10 sm:w-12" />

            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-600">
              India
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden items-center justify-center lg:flex"
        >
          <div className="relative flex h-[450px] w-[450px] items-center justify-center">
            {/* Soft Background Glow */}
            <div className="absolute h-[280px] w-[280px] rounded-full bg-purple-600/[0.08] blur-[100px]" />

            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[390px] w-[390px] rounded-full border border-purple-500/10"
            />

            {/* Dashed Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-purple-500/10"
            />

            {/* Inner Ring */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[240px] w-[240px] rounded-full border border-purple-500/15"
            />

            {/* Core */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 25px rgba(168,85,247,0.08)",
                  "0 0 55px rgba(168,85,247,0.18)",
                  "0 0 25px rgba(168,85,247,0.08)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative flex h-48 w-48 items-center justify-center rounded-full border border-purple-500/20 bg-[#080808]"
            >
              <div className="absolute inset-5 rounded-full border border-purple-500/10" />

              <div className="relative z-10 text-center">
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/20 bg-purple-500/10"
                >
                  <Cpu
                    size={31}
                    strokeWidth={1.3}
                    className="text-purple-400"
                  />
                </motion.div>

                <p className="mt-5 text-[9px] uppercase tracking-[0.3em] text-gray-600">
                  Cloud & DevOps
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Building
                </p>

                <p className="text-lg font-semibold text-purple-400">
                  Cloud Solutions
                </p>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-2 top-24 rounded-xl border border-white/10 bg-[#080808]/80 px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Cloud size={17} className="text-purple-400" />

                <div>
                  <p className="text-[9px] text-gray-600">CLOUD</p>

                  <p className="text-xs font-medium text-gray-300">
                    AWS • AZURE
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-24 right-2 rounded-xl border border-white/10 bg-[#080808]/80 px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Sparkles size={17} className="text-purple-400" />

                <div>
                  <p className="text-[9px] text-gray-600">FOCUS</p>

                  <p className="text-xs font-medium text-gray-300">
                    DEVOPS
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small Floating Spark */}
            <motion.div
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="absolute right-16 top-16"
            >
              <Sparkles size={17} className="text-purple-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.a
        href="#about"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-gray-600 transition-colors hover:text-purple-400 sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <ChevronDown size={15} />
      </motion.a>
    </section>
  );
};

export default Home;