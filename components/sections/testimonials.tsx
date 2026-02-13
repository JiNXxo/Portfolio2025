"use client";

import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const testimonials = [
  {
    quote:
      "He really took on Go High Level, learning how to build automations and monitor reporting. He helped set up our cold email campaigns through Instantly — the DNS settings, SPFs, DKIMs, DMARCs — he knows how to set those up. He's just a very solid worker. I paid him very well because he earned every penny.",
    name: "Dave",
    role: "Premier Agent Consulting",
    video: "https://www.youtube.com/shorts/9sJFbDFVk34",
  },
  {
    quote:
      "I had him on my team as a VA doing appointment setting and outreach for my business and he was absolutely outstanding. He's skilled in his ability to follow instruction and detail and actually convert conversations through appointment setting. He's reliable, works very hard, and I definitely recommend him.",
    name: "Karlin Landis",
    role: "Business Owner",
    video: "https://www.youtube.com/shorts/Blw-WaegB2M",
  },
  {
    quote:
      "He's a very good hard worker. He always gets the job done. He's always on time. I would take him back in a heartbeat. If anyone's interested in a solid virtual assistant, please pick up Leonald — for any position really, he's awesome.",
    name: "Elijah",
    role: "Former Client",
    video: "https://www.youtube.com/shorts/iJWXbLGL2PY",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What People Say"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col p-6 bg-white/5 border border-white/5 rounded-xl relative"
              >
                <Quote
                  size={32}
                  className="text-blue-500/20 absolute top-4 right-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                  <a
                    href={testimonial.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Play size={12} />
                    Watch
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
