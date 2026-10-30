import { motion } from "framer-motion";
import {
  Code2,
  Cloud,
  Container,
  Server,
  Database,
  Wrench,
  Network,
  GitBranch,
  Brain,
  MessageCircle,
  ArrowUpRight,
  Settings,
  Terminal,
  ShieldCheck,
  Boxes,
  Workflow,
} from "lucide-react";

import {
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaAws,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Programming & Scripting",
    icon: Code2,
    skills: [
      {
        name: "Python",
        icon: FaPython,
      },
      {
        name: "Shell Scripting",
        icon: Terminal,
      },
      {
        name: "SQL",
        icon: Database,
      },
    ],
  },

  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      {
        name: "AWS",
        icon: FaAws,
      },
      {
        name: "Microsoft Azure",
        icon: Cloud,
      },
      {
        name: "Google Cloud",
        icon: Cloud,
      },
    ],
  },

  {
    title: "Containers & Kubernetes",
    icon: Container,
    skills: [
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "Kubernetes",
        icon: Boxes,
      },
      {
        name: "Helm",
        icon: Settings,
      },
    ],
  },

  {
    title: "Infrastructure as Code",
    icon: GitBranch,
    skills: [
      {
        name: "Terraform",
        icon: GitBranch,
      },
      {
        name: "Ansible",
        icon: Settings,
      },
      {
        name: "Terraform Modules",
        icon: Boxes,
      },
      {
        name: "Cloud Automation",
        icon: Cloud,
      },
    ],
  },

  {
    title: "DevOps & CI/CD",
    icon: Workflow,
    skills: [
      {
        name: "Jenkins",
        icon: Workflow,
      },
      {
        name: "GitHub Actions",
        icon: GitBranch,
      },
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "CI/CD",
        icon: Workflow,
      },
    ],
  },

  {
    title: "Linux & Networking",
    icon: Network,
    skills: [
      {
        name: "Linux",
        icon: FaLinux,
      },
      {
        name: "Networking",
        icon: Network,
      },
      {
        name: "Shell",
        icon: Terminal,
      },
      {
        name: "Cloud Networking",
        icon: Cloud,
      },
    ],
  },

  {
    title: "Databases",
    icon: Database,
    skills: [
      {
        name: "MySQL",
        icon: Database,
      },
      {
        name: "PostgreSQL",
        icon: Database,
      },
      {
        name: "SQL",
        icon: Database,
      },
    ],
  },

  {
    title: "Tools & Professional Skills",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "Problem Solving",
        icon: Brain,
      },
      {
        name: "Communication",
        icon: MessageCircle,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-purple-400">
            <span className="h-px w-8 bg-purple-500" />

            <span>TECHNICAL EXPERTISE</span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Skills<span className="text-purple-500">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Technologies and tools I use to build, automate and manage cloud
            infrastructure, containerized applications and DevOps workflows.
          </p>
        </motion.div>

        {/* SKILL GRID */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: groupIndex * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-purple-500/30 hover:bg-white/[0.04]"
              >
                {/* GLOW */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-600/20" />

                {/* GROUP HEADER */}
                <div className="relative mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                    <GroupIcon
                      size={19}
                      className="text-purple-400"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-gray-600">
                      {String(groupIndex + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>

                {/* SKILLS */}
                <div className="relative grid grid-cols-2 gap-2">
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 rounded-xl border border-white/5 bg-black/20 px-3 py-3 transition duration-300 hover:border-purple-500/20 hover:bg-purple-500/5"
                      >
                        <SkillIcon
                          size={17}
                          className="shrink-0 text-gray-400 transition-colors group-hover:text-purple-400"
                        />

                        <span className="truncate text-[11px] text-gray-400">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CURRENT FOCUS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 overflow-hidden rounded-2xl border border-purple-500/20 bg-purple-500/[0.035]"
        >
          <div className="flex flex-col gap-6 p-7 sm:p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 font-mono text-[9px] tracking-[0.3em] text-purple-400">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />

                CURRENT FOCUS
              </div>

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Cloud Computing & DevOps
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
                Building practical experience with cloud infrastructure,
                container orchestration, Infrastructure as Code and automated
                deployment workflows.
              </p>
            </div>

            {/* FOCUS TECHNOLOGIES */}
            <div className="flex flex-wrap gap-2">
              {[
                {
                  name: "AWS",
                  icon: FaAws,
                },
                {
                  name: "Azure",
                  icon: Cloud,
                },
                {
                  name: "Docker",
                  icon: FaDocker,
                },
                {
                  name: "Kubernetes",
                  icon: Boxes,
                },
                {
                  name: "Terraform",
                  icon: GitBranch,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-2"
                  >
                    <Icon
                      size={14}
                      className="text-purple-400"
                    />

                    <span className="text-[11px] text-gray-400">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 font-mono text-xs tracking-[0.15em] text-gray-500 transition hover:text-purple-400"
          >
            VIEW MY PROJECTS

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;