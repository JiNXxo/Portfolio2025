"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const getYoutubeVideoId = (url: string) => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([A-Za-z0-9_-]{11})/);
  return match ? match[1] : "";
};

const getYoutubeThumbnailUrls = (videoId: string) => [
  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
  `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
];

const VideoTestimonialCard = ({ testimonial, delay }: { testimonial: { quote: string; name: string; role: string; video: string }; delay: number }) => {
  const videoId = getYoutubeVideoId(testimonial.video);
  const thumbnailUrls = videoId ? getYoutubeThumbnailUrls(videoId) : [];
  const [thumbnailSrc, setThumbnailSrc] = useState(thumbnailUrls[0] || "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group overflow-hidden rounded-[32px] border border-white/5 bg-white/5 shadow-[0_24px_80px_-52px_rgba(255,255,255,0.35)] min-h-[36rem]"
    >
      {thumbnailSrc && (
        <a
          href={testimonial.video}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden"
        >
          <div className="relative aspect-[9/16] w-full overflow-hidden bg-slate-950">
            <img
              src={thumbnailSrc}
              alt={`${testimonial.name} video thumbnail`}
              loading="lazy"
              onError={() => {
                const nextIndex = thumbnailUrls.indexOf(thumbnailSrc) + 1;
                if (nextIndex < thumbnailUrls.length) {
                  setThumbnailSrc(thumbnailUrls[nextIndex]);
                }
              }}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600/95 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.6)]">
                <Play size={28} className="text-white" />
              </div>
            </div>
            <div className="absolute left-4 top-4 text-left">
              <p className="text-xs uppercase tracking-[0.32em] text-slate-200/80">
                Testimonial Video
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                {testimonial.name}
              </p>
            </div>
          </div>
        </a>
      )}

      <div className="flex flex-col flex-1 p-6">
        <div className="relative flex-1">
          <Quote size={32} className="text-blue-500/20 absolute top-6 right-6" />
          <p className="text-gray-300 text-sm leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-sm">{testimonial.name}</p>
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
        </div>
      </div>
    </motion.div>
  );
};

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
          <SectionHeading label="Testimonials" title="What People Say" />

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <VideoTestimonialCard
                key={i}
                testimonial={testimonial}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
