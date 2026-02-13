"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Zap,
  Users,
  BarChart3,
  Megaphone,
  Settings,
} from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const services = [
  {
    icon: Mail,
    title: "Cold Email Marketing",
    description:
      "Strategic cold email campaigns that generate leads and drive conversions. From list building to copy optimization and deliverability management.",
  },
  {
    icon: Zap,
    title: "GoHighLevel Automation",
    description:
      "End-to-end marketing automation using GoHighLevel — funnels, workflows, appointment scheduling, and CRM management.",
  },
  {
    icon: Users,
    title: "Team Management",
    description:
      "Build and lead high-performing remote teams. Performance coaching, training programs, and operational alignment with business goals.",
  },
  {
    icon: BarChart3,
    title: "Sales Operations",
    description:
      "Sales projections, revenue forecasting, and pipeline management. Proven track record of increasing sales by 80-85% through strategic goal-setting.",
  },
  {
    icon: Megaphone,
    title: "Social Media Outreach",
    description:
      "Strategic social media campaigns to attract clients and build brand presence. Content planning, engagement strategies, and lead generation.",
  },
  {
    icon: Settings,
    title: "Process Optimization",
    description:
      "Streamline business operations by identifying bottlenecks, reducing costs, and implementing efficient workflows across departments.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading label="Services" title="How I Can Help You" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-white/5 border border-white/5 rounded-xl hover:border-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 rounded-lg w-fit mb-4">
                  <service.icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
