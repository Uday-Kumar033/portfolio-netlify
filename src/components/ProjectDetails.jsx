import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = {
  "three-tier-microservices-aks": {
    category: "CLOUD / DEVOPS",
    title: "Three-Tier Microservices Deployment",
    description: `A cloud-native three-tier microservices application deployed on Microsoft Azure Kubernetes Service (AKS).

The project uses Docker for containerization and Kubernetes for orchestration, with Helm for deployment management. It includes multiple backend microservices, databases, caching, messaging, ingress, and monitoring components.`,

    tech: [
      "Microsoft Azure",
      "Azure AKS",
      "Docker",
      "Kubernetes",
      "Helm",
      "Nginx",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "MySQL",
    ],

    features: [
      "Three-tier microservices architecture",
      "Deployment on Azure Kubernetes Service (AKS)",
      "Docker-based containerization",
      "Kubernetes Deployments and Services",
      "Kubernetes Ingress configuration",
      "Helm-based application deployment",
      "ConfigMap-based configuration",
      "Multiple backend microservices",
      "Cloud-native application deployment",
      "Networking and traffic management",
      "Monitoring and observability",
    ],

    github:
      "https://github.com/Uday-Kumar033/Project-ThreeTier-Stan-s-Robot-Shop-",

    live: "#",
  },

  "iam-management-system": {
    category: "AWS / TERRAFORM",
    title: "IAM Management System",

    description: `An Infrastructure as Code project for managing AWS Identity and Access Management resources using Terraform.

The project automates the creation and management of IAM users, roles, and policies while following a reusable and structured Terraform configuration approach.`,

    tech: [
      "AWS",
      "Terraform",
      "AWS IAM",
      "Infrastructure as Code",
      "Linux",
      "Cloud Security",
    ],

    features: [
      "AWS IAM resource management",
      "Terraform-based automation",
      "IAM user management",
      "IAM role management",
      "IAM policy management",
      "Infrastructure as Code",
      "Reusable Terraform configuration",
      "Permission management",
      "Cloud security practices",
      "Automated resource provisioning",
    ],

    github: "https://github.com/Uday-Kumar033",
    live: "#",
  },

  "terraform-vpc-module": {
    category: "INFRASTRUCTURE AS CODE",
    title: "Terraform VPC Module",

    description: `A reusable Terraform module designed to automate AWS VPC infrastructure provisioning.

The project focuses on Infrastructure as Code, cloud networking, subnet configuration, and modular Terraform architecture for creating reusable and maintainable AWS infrastructure.`,

    tech: [
      "AWS",
      "Terraform",
      "VPC",
      "Cloud Networking",
      "Infrastructure as Code",
      "Linux",
    ],

    features: [
      "Reusable Terraform VPC module",
      "AWS VPC provisioning",
      "Infrastructure as Code",
      "Cloud networking configuration",
      "Subnet configuration",
      "Reusable infrastructure resources",
      "Infrastructure automation",
      "Modular Terraform architecture",
      "Maintainable infrastructure configuration",
    ],

    github: "https://github.com/Uday-Kumar033",
    live: "#",
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects[slug];

  // Always open the project details page from the top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Project Not Found
          </h1>

          <p className="text-gray-400 mb-8">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/10 blur-[150px] rounded-full" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-16">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Category */}
          <p className="text-sm tracking-[0.25em] text-purple-400 font-medium mb-4">
            {project.category}
          </p>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
            {project.title}
          </h1>

          {/* Description */}
          <p className="mt-7 text-gray-400 text-base md:text-lg leading-8 max-w-3xl whitespace-pre-line">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-all"
            >
              <FaGithub size={19} />
              View on GitHub
            </a>

            {/* Live Demo */}
            {project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}

          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-7">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((technology, index) => (
              <motion.span
                key={technology}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-gray-300 text-sm hover:border-purple-500/40 hover:bg-purple-500/5 transition-all"
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-7">
            Key Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.025] hover:bg-white/[0.05] hover:border-purple-500/20 transition-all"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />

                <p className="text-gray-300 text-sm md:text-base">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Preview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-7">
            Project Preview
          </h2>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] p-8 md:p-12">

            {/* Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">

              {/* Project Number */}
              <div className="text-7xl md:text-9xl font-bold text-white/[0.04] mb-4">
                {String(
                  Object.keys(projects).indexOf(slug) + 1
                ).padStart(2, "0")}
              </div>

              {/* Category */}
              <p className="text-purple-400 text-sm tracking-[0.2em] mb-3">
                {project.category}
              </p>

              {/* Project Title */}
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                {project.title}
              </h3>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 5).map((technology) => (
                  <span
                    key={technology}
                    className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </motion.section>

        {/* Bottom Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-4 pb-10"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Back to All Projects
          </Link>
        </motion.div>

      </main>
    </div>
  );
};

export default ProjectDetails;