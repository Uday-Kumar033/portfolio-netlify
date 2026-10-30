import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Freelance = () => {
  const services = [
    "Cloud Infrastructure & Deployment",
    "Docker & Kubernetes",
    "Terraform & Infrastructure as Code",
    "CI/CD Pipeline Automation",
  ];

  return (
    <section id="freelance" className="relative py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[32px] border border-purple-500/20 bg-white/[0.025] p-8 sm:p-12 lg:p-16"
        >
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-purple-600/[0.10] blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[300px] w-[300px] rounded-full bg-indigo-600/[0.07] blur-[120px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
            <div>
              {/* Label */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/[0.08]">
                  <BriefcaseBusiness
                    size={19}
                    className="text-purple-400"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-purple-400">
                    Cloud & DevOps
                  </p>

                  <p className="mt-1 text-xs text-gray-600">
                    Open to projects & collaborations
                  </p>
                </div>
              </div>

              {/* Heading */}
              <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Have a cloud
                <br />
                <span className="text-purple-400">project in mind?</span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
                I'm interested in cloud and DevOps projects where I can help
                with infrastructure automation, containerized applications,
                Kubernetes deployments, and CI/CD workflows.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "AWS",
                  "Azure",
                  "GCP",
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                >
                  Let's Connect
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="mailto:udaysinghpagurkothi@gmail.com?subject=Cloud%20%26%20DevOps%20Project%20Inquiry"
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-purple-500/30 hover:bg-purple-500/[0.08] hover:text-white"
                >
                  Email Me
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-[28px] border border-white/10 bg-black/20 p-6 backdrop-blur-xl sm:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                      What I can do
                    </p>

                    <h3 className="mt-2 text-xl font-semibold">
                      Cloud & DevOps Services
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/20 bg-purple-500/[0.08]">
                    <Sparkles size={19} className="text-purple-400" />
                  </div>
                </div>

                <div className="space-y-4">
                  {services.map((service) => (
                    <div
                      key={service}
                      className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-4 transition-all duration-300 hover:border-purple-500/20 hover:bg-purple-500/[0.04]"
                    >
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-purple-400"
                      />

                      <span className="text-sm text-gray-400 transition-colors group-hover:text-gray-200">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="mt-7 flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/[0.04] px-4 py-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>

                  <div>
                    <p className="text-sm font-medium text-gray-300">
                      Open to Cloud & DevOps opportunities
                    </p>

                    <p className="mt-1 text-xs text-gray-600">
                      Let's discuss your project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Freelance;