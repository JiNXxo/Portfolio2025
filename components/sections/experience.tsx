"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const roles = [
  {
    title: "Department Manager",
    company: "CSD",
    period: "May 2024 - Present",
    description:
      "Lead and develop high-performing teams, streamline operations, and ensure alignment of departmental goals with business objectives.",
  },
  {
    title: "Executive Assistant",
    company: "Producer Masterminds",
    period: "Nov 2022 - Apr 2024",
    description:
      "Drive business growth, develop strategic contacts, identify emerging market opportunities, and manage sales projections.",
  },
  {
    title: "Direct Sales Representative",
    company: "Producer Masterminds",
    period: "May 2022 - Oct 2022",
    description:
      "Assisted Web3 companies in launching and scaling projects, contributing to 20+ NFT initiatives.",
  },
  {
    title: "Senior Operations Supervisor",
    company: "AV Outsourcing / Citizens Disability",
    period: "Jan 2019 - Apr 2020",
    description:
      "Managed Intake team, coached customer service best practices, and led comprehensive training on company services.",
  },
  {
    title: "Production Team Lead",
    company: "TELEOUTSOURCING",
    period: "Jan 2015 - Jan 2019",
    description:
      "Optimized revenue streams, increased sales by 80-85%, and coordinated projects across major UK and US campaigns.",
  },
  {
    title: "Marketing Manager",
    company: "Yeshua Auto Air Conditioning Parts & Supplies",
    period: "Apr 2014 - Dec 2014",
    description:
      "Developed marketing materials for sales presentations and implemented favorable pricing structures.",
  },
  {
    title: "Professional Freelancer",
    company: "Work From Home",
    period: "Oct 2007 - Jun 2011",
    description:
      "Developed strategic solutions, managed intake operations for SSDI/SSI claims, and specialized in outreach campaigns.",
  },
];

const education = {
  school: "MATS College of Technology",
  degree: "Bachelor of Science in Marine Transportation",
  period: "2011 - 2014",
  gpa: "4.00",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading label="Experience" title="My Career Journey" />

          {/* Timeline */}
          <div className="relative">
            {/* Glowing center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent md:-translate-x-px" />

            {roles.map((role, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start mb-12 ${
                    isLeft
                      ? "md:flex-row md:text-right"
                      : "md:flex-row-reverse md:text-left"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1.5 mt-2 shadow-[0_0_8px_rgba(59,130,246,0.6)] z-10"
                  />

                  {/* Card */}
                  <div
                    className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300">
                      <p className="text-sm text-blue-400 mb-1">{role.period}</p>
                      <h3 className="text-lg font-bold text-white">
                        {role.title}
                      </h3>
                      <p className="text-sm text-cyan-300 mb-2">{role.company}</p>
                      <p className="text-sm text-gray-400">{role.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Education entry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex items-start"
            >
              <motion.div
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full -translate-x-1.5 mt-2 shadow-[0_0_8px_rgba(6,182,212,0.6)] z-10"
              />
              <div className="ml-10 md:ml-auto md:w-[calc(50%-2rem)] md:pl-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-cyan-400" />
                    <p className="text-sm text-cyan-400">{education.period}</p>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm text-cyan-300">{education.school}</p>
                  <p className="text-sm text-gray-400 mt-1">GPA: {education.gpa}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
