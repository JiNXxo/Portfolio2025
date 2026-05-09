"use client";

import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const getYoutubeVideoId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
};

const getYoutubeThumbnailUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

const testimonials = [
  {
    quote:
      "Web3 & Web2 Outreach, Real Estate Outreach, Business Outreach, Direct Email, Lead Scraper, Outreach Manager, Top Seller a full ervice, multi‑channel outreach program designed to generate qualified leads, book meetings.",
    name: "Isaac Williamson",
    role: "COO of LeadMedia",
    video: "https://www.youtube.com/shorts/9sJFbDFVk34",
  },
  {
    quote:
      "As an Executive Assistant, I provide comprehensive support that empowers business owners to focus on growth. Beyond managing calendars, meetings, and communications, I oversee their GoHighLevel CRM to ensure smooth client workflows and pipeline visibility. I also manage call centers and agents, implement quality assurance processes, and streamline operations to maximize efficiency. My role is not just administrative — it’s strategic: anticipating needs, maintaining structure, and driving performance so leaders can scale their vision with confidence.",
    name: "David Leathers",
    role: "Founder of Premier Agent Consulting",
    video: "https://youtu.be/9qKtRMTxP5o?si=B9lBQ99_tZN4XisI",
  },
  {
    quote:
      "I help business owners launch their dream cold email campaigns from zero to hero. That means handling the entire setup: registering domains and users, configuring DNS records for proper authentication, and warming inboxes to build trust. From there, I scrape and qualify high-quality leads, craft personalized outreach that resonates, and manage follow-ups to keep conversations alive. Finally, I scale campaigns into booked meetings and sales — all while safeguarding deliverability and sender reputation through smart automations and weekly rotations. With me, your outreach isn’t just set up — it’s built to perform, adapt, and grow.",
    name: "Riley Feldman",
    role: "Managing Partner at Catalyst FG",
    video: "https://youtu.be/4LyZQxJJDBk?si=5mAM2_Y8gNZKY7kl",
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

                {(() => {
                  const videoId = getYoutubeVideoId(testimonial.video);
                  const thumbnailUrl = videoId
                    ? getYoutubeThumbnailUrl(videoId)
                    : null;

                  return thumbnailUrl ? (
                    <a
                      href={testimonial.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mb-5 overflow-hidden rounded-xl group"
                    >
                      <div className="relative aspect-video rounded-xl overflow-hidden">
                        <img
                          src={thumbnailUrl}
                          alt={`${testimonial.name} video thumbnail`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity group-hover:opacity-90">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                            <Play size={28} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </a>
                  ) : null;
                })()}

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
