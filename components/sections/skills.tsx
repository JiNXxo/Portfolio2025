"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";

const technicalSkills = [
  { name: "Programming", level: 80 },
  { name: "Web Development", level: 85 },
  { name: "Python", level: 75 },
  { name: "ReactJS", level: 80 },
  { name: "Git", level: 70 },
  { name: "Visual Studio Code", level: 90 },
];

const softSkills = [
  "Innovative Thinking & Creativity",
  "Strong Interpersonal Skills",
  "Analytical & Critical Thinking",
  "Advanced Problem-Solving",
  "Effective Public Speaking",
  "Exceptional Customer Service",
  "Team Leadership & Collaboration",
  "Strong Communication Skills",
  "Active Listening & Engagement",
];

const languages = ["English", "Filipino"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="Skills" title="What I Bring to the Table" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                Technical Skills
              </h3>
              <div className="space-y-5">
                {technicalSkills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-6">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
                    }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 cursor-default transition-colors hover:border-cyan-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-400 mb-4">
                  Languages
                </h3>
                <div className="flex gap-3">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
