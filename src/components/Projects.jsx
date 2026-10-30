import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    slug: "three-tier-microservices-aks",
    number: "01",
    category: "CLOUD / DEVOPS",
    title: "Three-Tier Microservices Deployment",
    description:
      "A production-style three-tier microservices application deployed on Azure Kubernetes Service using Docker, Kubernetes and Helm. The project demonstrates containerized services, service discovery, ingress routing and cloud-native deployment practices.",
    tech: [
      "Microsoft Azure",
      "AKS",
      "Docker",
      "Kubernetes",
      "Helm",
      "Nginx",
      "MongoDB",
      "Redis",
    ],
    github:
      "https://github.com/Uday-Kumar033/Project-ThreeTier-Stan-s-Robot-Shop-",
    live: "#",
  },
  {
    slug: "iam-management-system",
    number: "02",
    category: "AWS / TERRAFORM",
    title: "IAM Management System",
    description:
      "An infrastructure automation project for managing AWS Identity and Access Management resources with Terraform. It demonstrates Infrastructure as Code, IAM users, roles, policies and permission management through reusable Terraform configurations.",
    tech: [
      "AWS",
      "Terraform",
      "IAM",
      "Infrastructure as Code",
      "Cloud Security",
      "Linux",
    ],
    github: "https://github.com/Uday-Kumar033",
    live: "#",
  },
  {
    slug: "terraform-vpc-module",
    number: "03",
    category: "INFRASTRUCTURE AS CODE",
    title: "Terraform VPC Module",
    description:
      "A reusable Terraform module for creating AWS VPC infrastructure with structured networking components. The project focuses on modular Infrastructure as Code, network configuration and reusable cloud infrastructure automation.",
    tech: [
      "AWS",
      "Terraform",
      "VPC",
      "Networking",
      "IaC",
      "Cloud Infrastructure",
    ],
    github: "https://github.com/Uday-Kumar033",
    live: "#",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const project = projects[current];

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-28 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-purple-400">
              <span className="h-px w-8 bg-purple-500" />

              <span>SELECTED WORK</span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Projects<span className="text-purple-500">.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              A collection of Cloud and DevOps projects focused on cloud
              infrastructure, containerization, Kubernetes, automation and
              Infrastructure as Code.
            </p>
          </div>

          {/* COUNTER */}
          <div className="font-mono text-sm text-gray-600">
            <span className="text-purple-400">
              {String(current + 1).padStart(2, "0")}
            </span>

            {" / "}

            {String(projects.length).padStart(2, "0")}
          </div>
        </motion.div>

        {/* PROJECT CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.025]"
          >
            {/* Top Border */}
            <div className="h-px w-full bg-gradient-to-r from-purple-500/60 via-purple-500/10 to-transparent" />

            <div className="grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
              {/* LEFT */}
              <div className="relative flex flex-col justify-between border-b border-white/10 p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-[0.25em] text-purple-400">
                      {project.number}
                    </span>

                    <Layers3 size={20} className="text-gray-700" />
                  </div>

                  <p className="mt-14 font-mono text-[10px] tracking-[0.3em] text-gray-600">
                    {project.category}
                  </p>

                  <h3 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                    {project.description}
                  </p>
                </div>

                {/* TECH */}
                <div className="mt-10">
                  <p className="mb-3 font-mono text-[9px] tracking-[0.25em] text-gray-700">
                    TECHNOLOGIES
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[11px] text-gray-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-14">
                {/* PROJECT PREVIEW */}
                <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-2xl border border-purple-500/10 bg-[#08080b]">
                  {/* Glow */}
                  <div className="absolute h-48 w-48 rounded-full bg-purple-600/20 blur-[90px]" />

                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)",
                      backgroundSize: "35px 35px",
                    }}
                  />

                  {/* Preview Window */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative flex h-32 w-52 flex-col justify-between rounded-xl border border-purple-500/30 bg-black/70 p-4 shadow-[0_0_60px_rgba(168,85,247,0.12)] backdrop-blur-xl"
                  >
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                      <span className="h-2 w-2 rounded-full bg-green-400/70" />
                    </div>

                    <div className="space-y-2">
                      <div className="h-1.5 w-3/4 rounded bg-purple-400/50" />

                      <div className="h-1.5 w-full rounded bg-white/10" />

                      <div className="h-1.5 w-1/2 rounded bg-blue-400/40" />
                    </div>

                    <div className="flex justify-between font-mono text-[8px]">
                      <span className="text-purple-400">CLOUD</span>

                      <span className="text-green-400">DEPLOYED</span>
                    </div>
                  </motion.div>
                </div>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {/* Live Demo */}
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-black transition hover:bg-purple-400"
                    >
                      Live Demo
                      <ExternalLink
                        size={16}
                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </a>
                  )}

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-gray-300 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>
                </div>

                {/* DETAILS */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="group mt-3 flex items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/[0.05] px-5 py-3.5 text-sm text-purple-300 transition hover:border-purple-500/40 hover:bg-purple-500/10"
                >
                  Explore Full Project
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* NAVIGATION */}
        <div className="mt-7 flex items-center justify-between">
          {/* Previous */}
          <button
            onClick={previousProject}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-gray-500 transition hover:border-purple-500/30 hover:text-white"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Previous
          </button>

          {/* DOTS */}
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  current === index
                    ? "w-8 bg-purple-400"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={nextProject}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2.5 text-xs text-gray-500 transition hover:border-purple-500/30 hover:text-white"
          >
            Next
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;