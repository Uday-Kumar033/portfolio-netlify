
const Experience = () => {
  const experiences = [
    {
      year: "2025",
      role: "Cloud & DevOps Projects",
      company: "Personal Projects",
      location: "Remote",
      description:
        "Built and deployed cloud-native applications and infrastructure using Microsoft Azure, AWS, Docker, Kubernetes, and Terraform. Worked on Azure Kubernetes Service deployments, containerized microservices, Infrastructure as Code, networking, IAM, and scalable cloud infrastructure.",
      skills: [
        "Microsoft Azure",
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Helm",
      ],
    },
    {
      year: "2024 — Present",
      role: "Cloud & DevOps Developer",
      company: "Self-Directed",
      location: "Remote",
      description:
        "Developing practical cloud and DevOps solutions while working with AWS, Azure, and GCP. Building infrastructure using Terraform, automating deployments, working with CI/CD concepts, Linux, Git, containerization, Kubernetes, and cloud networking.",
      skills: [
        "AWS",
        "Azure",
        "GCP",
        "Terraform",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      year: "2023 — Present",
      role: "B.Tech CSE — Cloud Computing",
      company: "Quantum University",
      location: "Roorkee, Uttarakhand",
      description:
        "Pursuing a Bachelor of Technology in Computer Science Engineering with a specialization in Cloud Computing. Building strong foundations in programming, Linux, networking, cloud platforms, DevOps, Infrastructure as Code, and software development while working on practical cloud projects.",
      skills: [
        "Python",
        "Shell Scripting",
        "SQL",
        "Linux",
        "Cloud Computing",
        "Networking",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}

        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-purple-500"></span>

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              Experience
            </span>
          </div>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            My <span className="text-purple-400">journey.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            My journey through cloud computing, DevOps, hands-on projects,
            and continuous learning in modern cloud technologies.
          </p>
        </div>

        {/* Experience List */}

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/[0.04] sm:p-9 lg:p-10"
            >
              {/* Purple Glow */}

              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-purple-600/[0.06] blur-[100px]"></div>

              <div className="relative">
                {/* Top */}

                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-4xl">
                    {/* Date */}

                    <p className="mb-3 text-sm font-medium tracking-[0.2em] text-purple-400">
                      {experience.year}
                    </p>

                    {/* Role */}

                    <h3 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                      {experience.role}
                    </h3>

                    {/* Company + Location */}

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
                      <span className="text-gray-300">
                        {experience.company}
                      </span>

                      <span className="text-gray-700">•</span>

                      <span>{experience.location}</span>
                    </div>
                  </div>

                  {/* Number */}

                  <div className="hidden text-5xl font-bold text-white/[0.04] sm:text-6xl md:block">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Divider */}

                <div className="my-7 h-px bg-white/10"></div>

                {/* Description */}

                <p className="max-w-5xl text-base leading-8 text-gray-500 sm:text-lg">
                  {experience.description}
                </p>

                {/* Skills */}

                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-gray-400 transition-all duration-300 group-hover:border-purple-500/20 group-hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}

        <div className="mt-12 rounded-[24px] border border-purple-500/10 bg-purple-500/[0.03] px-6 py-7 text-center">
          <p className="text-sm text-gray-500 sm:text-base">
            Always learning. Always building.{" "}
            <span className="text-purple-400">
              Always improving.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

