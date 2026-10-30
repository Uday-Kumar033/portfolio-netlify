import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-28 text-white">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* ========================================
            SECTION HEADER
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500" />

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              About Me
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building{" "}
            <span className="text-purple-400">
              cloud & DevOps solutions.
            </span>
          </h2>
        </motion.div>

        {/* ========================================
            MAIN CONTENT
        ======================================== */}

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ========================================
              LEFT ABOUT CARD
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9"
          >
            <div>
              <p className="max-w-2xl text-xl font-medium leading-9 text-gray-200 sm:text-2xl">
                I'm Uday Kumar, a Computer Science Engineering student
                specializing in Cloud Computing, passionate about building
                scalable cloud infrastructure and DevOps solutions.
              </p>

              <p className="mt-7 max-w-2xl text-[15px] leading-8 text-gray-500">
                I work with cloud platforms such as AWS, Microsoft Azure and
                Google Cloud Platform, along with technologies like Docker,
                Kubernetes, Terraform, Jenkins and Ansible. I enjoy deploying
                applications, automating infrastructure and solving real-world
                cloud and DevOps challenges.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-gray-500">
                My approach is simple — understand the problem, automate what
                can be automated, build reliable infrastructure, and continuously
                learn new technologies to create scalable and secure solutions.
              </p>
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex w-fit items-center gap-2 border-b border-purple-500/40 pb-2 text-sm font-medium text-purple-300 transition hover:border-purple-400 hover:text-purple-200"
            >
              Let's work together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>

          {/* ========================================
              RIGHT PROFILE CARD
          ======================================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl sm:p-8">
              {/* Header */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-600">
                    Cloud Developer Profile
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">Who I am</h3>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                  <Code2 size={21} className="text-purple-400" />
                </div>
              </div>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <BriefcaseBusiness
                    size={19}
                    className="mb-5 text-purple-400"
                  />

                  <p className="text-2xl font-bold">3+</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Cloud Projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <Sparkles size={19} className="mb-5 text-purple-400" />

                  <p className="text-2xl font-bold">3</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Cloud Platforms
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <GraduationCap
                    size={19}
                    className="mb-5 text-purple-400"
                  />

                  <p className="text-2xl font-bold">8.7</p>

                  <p className="mt-1 text-xs text-gray-500">
                    CGPA
                  </p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-5">
                  <Code2 size={19} className="mb-5 text-purple-400" />

                  <p className="text-2xl font-bold">DevOps</p>

                  <p className="mt-1 text-xs text-gray-500">
                    Focus Area
                  </p>
                </div>
              </div>

              {/* Technologies */}

              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-gray-600">
                  Core Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Azure",
                    "GCP",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                    "Jenkins",
                    "Python",
                    "Linux",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-400 transition hover:border-purple-500/30 hover:text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ========================================
            WHAT I DO
        ======================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-8">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              What I Do
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {/* Cloud & DevOps */}

            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.03]">
              <Code2 size={23} className="mb-6 text-purple-400" />

              <h3 className="text-lg font-semibold">
                Cloud & DevOps
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Building and managing cloud infrastructure using AWS, Azure,
                GCP, Docker, Kubernetes and modern DevOps practices.
              </p>
            </div>

            {/* Infrastructure Automation */}

            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.03]">
              <Sparkles size={23} className="mb-6 text-purple-400" />

              <h3 className="text-lg font-semibold">
                Infrastructure Automation
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Automating infrastructure and deployments with Terraform,
                Jenkins, Ansible, CI/CD pipelines and Infrastructure as Code.
              </p>
            </div>

            {/* Cloud Applications */}

            <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-purple-500/[0.03]">
              <BriefcaseBusiness
                size={23}
                className="mb-6 text-purple-400"
              />

              <h3 className="text-lg font-semibold">
                Cloud Applications
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Deploying scalable applications on cloud platforms with
                containerization, Kubernetes orchestration and reliable
                infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;