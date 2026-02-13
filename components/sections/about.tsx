"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download } from "lucide-react";
import AnimatedCounter from "@/components/ui/animated-counter";
import SectionHeading from "@/components/ui/section-heading";

const stats = [
  { value: 3, suffix: "+", label: "Years BPO Experience" },
  { value: 20, suffix: "+", label: "NFT Projects Launched" },
  { value: 85, suffix: "%", label: "Sales Increase Achieved" },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              style={{ y: imageY }}
              className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br from-blue-500/50 to-cyan-500/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl" />
              <img
                src="/leonald-pilvera.webp"
                alt="Leonald Pilvera"
                className="relative w-full aspect-[11/12] object-cover object-top rounded-xl"
              />
            </motion.div>
            <a
              href="/leonald-pilvera-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blue-500/80 hover:bg-blue-600/80 rounded-lg transition-colors text-sm font-medium"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading label="About Me" title="Accomplished Production Team Leader" />
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Accomplished Production Team Leader with over 3 years of experience
              in the BPO industry, renowned for effectively resolving complex
              issues, enhancing customer satisfaction, and driving operational
              efficiencies. Proven track record of cost optimization and profit
              growth through strategic leadership and continuous process
              improvements.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
