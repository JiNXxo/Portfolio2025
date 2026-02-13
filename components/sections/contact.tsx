"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "pilveraleonald@gmail.com",
    href: "mailto:pilveraleonald@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+639515200853",
    href: "tel:+639515200853",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Leonald Pilvera",
    href: "https://www.linkedin.com/in/leonaldpilvera948a111a6",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading label="Contact" title="Let's Work Together" />
          <p className="text-gray-300 text-lg mb-12">
            Ready to streamline your operations? Let&apos;s connect.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <item.icon size={24} className="text-blue-400" />
                </div>
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="text-sm text-white font-medium">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
