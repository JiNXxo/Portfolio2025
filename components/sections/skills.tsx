"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Zap,
  Database,
  Code2,
  Workflow,
  Globe,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const tools = [
  { icon: Zap, name: "GoHighLevel", category: "Automation" },
  { icon: Mail, name: "Cold Email Platforms", category: "Outreach" },
  { icon: Database, name: "CRM Systems", category: "Sales" },
  { icon: Workflow, name: "Zapier / Make", category: "Integration" },
  { icon: Code2, name: "Python", category: "Development" },
  { icon: Globe, name: "ReactJS / Next.js", category: "Web Development" },
];

const softSkills = [
  "Team Leadership & Coaching",
  "Strategic Problem-Solving",
  "Clear Communication",
  "Process Optimization",
  "Client Relationship Management",
];

const languages = ["English", "Filipino"];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="Skills" title="What I Bring to the Table" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Tools & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-6">
                Tools &amp; Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{
                      y: -2,
                      boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)",
                    }}
                    className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-colors"
                  >
                    <tool.icon size={20} className="text-blue-400 mb-2" />
                    <p className="text-sm font-medium text-white">
                      {tool.name}
                    </p>
                    <p className="text-xs text-gray-500">{tool.category}</p>
                  </motion.div>
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
                Core Strengths
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
