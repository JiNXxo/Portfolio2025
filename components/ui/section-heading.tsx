"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <p className="text-sm uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
        <span className="h-px w-8 bg-blue-400" />
        {label}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold">{title}</h2>
    </motion.div>
  );
}
