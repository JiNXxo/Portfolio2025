# Cinematic Scroll Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the Vite-based portfolio into a Next.js single-page app with immersive scroll-driven animations, particle effects, and micro-interactions.

**Architecture:** Next.js App Router with static export (`output: 'export'`). Single `page.tsx` composes all section components. All interactive sections are Client Components (`'use client'`). Shared animation utilities (MagneticButton, ParticleField, TypewriterText) live in `components/ui/`.

**Tech Stack:** Next.js (latest), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React

**Reference:** Use `frontend-design` skill when implementing each visual section. Use `next-best-practices` skill for Next.js patterns.

---

### Task 1: Scaffold Next.js Project

**Goal:** Replace the Vite project with a fresh Next.js setup, preserving public assets.

**Step 1: Back up public assets**

```bash
cp -r public /tmp/portfolio-public-backup
```

**Step 2: Remove old Vite project files (keep .git and docs)**

```bash
# Remove Vite-specific files and src directory
rm -rf src node_modules package.json package-lock.json index.html vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json eslint.config.js README.md public
```

**Step 3: Create Next.js project in current directory**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --yes
```

**Step 4: Restore public assets**

```bash
cp /tmp/portfolio-public-backup/leonald-pilvera.webp public/
cp /tmp/portfolio-public-backup/leonald-pilvera-resume.pdf public/
```

**Step 5: Install additional dependencies**

```bash
npm install framer-motion lucide-react
```

**Step 6: Verify it runs**

```bash
npm run dev
```

Expected: Next.js dev server starts at localhost:3000 with the default page.

**Step 7: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js project replacing Vite"
```

---

### Task 2: Configure Project Foundation

**Goal:** Set up static export, global styles, font, color palette, and metadata.

**Files:**
- Modify: `next.config.ts`
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Delete: `app/page.tsx` (will recreate in Task 10)

**Step 1: Configure static export in next.config.ts**

Replace `next.config.ts` with:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

**Step 2: Set up root layout with Inter font and metadata**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leonald Pilvera | Virtual Assistant & Automation Expert",
  description:
    "Accomplished Production Team Leader with over 3 years of experience in the BPO industry. Virtual Assistant specializing in automation and operational efficiency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0a0a0f] text-white antialiased">{children}</body>
    </html>
  );
}
```

**Step 3: Set up global CSS with Tailwind and custom properties**

Replace `app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --color-bg-primary: #0a0a0f;
  --color-bg-secondary: #111118;
  --color-accent-blue: #3b82f6;
  --color-accent-cyan: #06b6d4;
  --color-text-primary: #ffffff;
  --color-text-secondary: #d1d5db;
  --color-card-bg: rgba(255, 255, 255, 0.05);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--color-accent-blue);
  border-radius: 3px;
}

/* Selection color */
::selection {
  background: rgba(59, 130, 246, 0.3);
  color: white;
}
```

**Step 4: Create placeholder page**

Replace `app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main>
      <h1>Portfolio - Under Construction</h1>
    </main>
  );
}
```

**Step 5: Verify build works**

```bash
npm run build
```

Expected: Build succeeds with static export.

**Step 6: Commit**

```bash
git add -A
git commit -m "chore: configure static export, global styles, and metadata"
```

---

### Task 3: Create Shared UI Components

**Goal:** Build reusable animation components used across multiple sections.

**Files:**
- Create: `components/ui/magnetic-button.tsx`
- Create: `components/ui/particle-field.tsx`
- Create: `components/ui/typewriter-text.tsx`
- Create: `components/ui/animated-counter.tsx`
- Create: `components/ui/section-heading.tsx`

**Step 1: Create MagneticButton component**

Create `components/ui/magnetic-button.tsx`:

```tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.15;
    const y = (clientY - (top + height / 2)) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <Component
        href={href ?? undefined}
        onClick={onClick}
        className={className}
      >
        {children}
      </Component>
    </motion.div>
  );
}
```

**Step 2: Create ParticleField component**

Create `components/ui/particle-field.tsx`:

```tsx
"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    particlesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
    }));

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
        ctx.fill();
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
```

**Step 3: Create TypewriterText component**

Create `components/ui/typewriter-text.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export default function TypewriterText({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}: TypewriterTextProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
```

**Step 4: Create AnimatedCounter component**

Create `components/ui/animated-counter.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
```

**Step 5: Create SectionHeading component**

Create `components/ui/section-heading.tsx`:

```tsx
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
```

**Step 6: Verify build**

```bash
npm run build
```

Expected: Build succeeds.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add shared UI components (MagneticButton, ParticleField, TypewriterText, AnimatedCounter, SectionHeading)"
```

---

### Task 4: Navigation Section

**Goal:** Fixed nav with transparent-to-frosted scroll behavior, LP monogram, mobile overlay menu.

**Files:**
- Create: `components/sections/navigation.tsx`

**Step 1: Create Navigation component**

Create `components/sections/navigation.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
          {/* LP Monogram */}
          <button
            onClick={() => scrollTo("hero")}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            LP
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-lg flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => scrollTo(link.id)}
                  className="text-2xl text-white hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

**Step 2: Verify build**

```bash
npm run build
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Navigation with scroll detection and mobile overlay"
```

---

### Task 5: Hero Section

**Goal:** Full-viewport hero with particle field, staggered name animation, typewriter subtitle, magnetic CTAs.

**Files:**
- Create: `components/sections/hero.tsx`

**Step 1: Create Hero component**

Create `components/sections/hero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleField from "@/components/ui/particle-field";
import TypewriterText from "@/components/ui/typewriter-text";
import MagneticButton from "@/components/ui/magnetic-button";

const nameLetters = "LEONALD PILVERA".split("");

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-sm text-gray-300">
            Virtual Assistant & Automation Expert
          </span>
        </motion.div>

        {/* Staggered name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6">
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.04, type: "spring", stiffness: 100 }}
              className="inline-block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Typewriter subtitle */}
        <div className="text-xl md:text-2xl text-gray-300 mb-12 h-8">
          <TypewriterText
            words={["Department Manager", "Automation Expert", "Team Leader"]}
          />
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <MagneticButton
            href="#contact"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors font-medium"
          >
            Get in Touch
          </MagneticButton>
          <MagneticButton
            href="#experience"
            className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white rounded-lg transition-colors font-medium"
          >
            View My Work
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-gray-400" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
```

**Step 2: Verify build**

```bash
npm run build
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Hero section with particles, staggered name, and typewriter"
```

---

### Task 6: About Section

**Goal:** Two-column layout with parallax photo, bio, animated stat counters, resume download.

**Files:**
- Create: `components/sections/about.tsx`

**Step 1: Create About component**

Create `components/sections/about.tsx`:

```tsx
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
```

**Step 2: Verify build**

```bash
npm run build
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add About section with parallax photo, bio, and animated stats"
```

---

### Task 7: Experience Section

**Goal:** Interactive vertical timeline with alternating cards, glowing line, scroll-triggered animations, education entry.

**Files:**
- Create: `components/sections/experience.tsx`

**Step 1: Create Experience component**

Create `components/sections/experience.tsx`:

```tsx
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
```

**Step 2: Verify build**

```bash
npm run build
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Experience timeline with alternating cards and education"
```

---

### Task 8: Skills Section

**Goal:** Technical skills with animated progress bars, soft skills as floating glow badges, language badges.

**Files:**
- Create: `components/sections/skills.tsx`

**Step 1: Create Skills component**

Create `components/sections/skills.tsx`:

```tsx
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
```

**Step 2: Verify build**

```bash
npm run build
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Skills section with progress bars and floating badges"
```

---

### Task 9: Contact + Footer Sections

**Goal:** Contact info display with icon hover animations, simple footer.

**Files:**
- Create: `components/sections/contact.tsx`
- Create: `components/sections/footer.tsx`

**Step 1: Create Contact component**

Create `components/sections/contact.tsx`:

```tsx
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
```

**Step 2: Create Footer component**

Create `components/sections/footer.tsx`:

```tsx
export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Leonald Pilvera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

**Step 3: Verify build**

```bash
npm run build
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Contact and Footer sections"
```

---

### Task 10: Compose Page + Final Polish

**Goal:** Wire all sections together in page.tsx, verify full static build, visual check.

**Files:**
- Modify: `app/page.tsx`

**Step 1: Compose page with all sections**

Replace `app/page.tsx` with:

```tsx
import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
```

**Step 2: Run dev server and visually verify all sections**

```bash
npm run dev
```

Check: All 7 sections render, animations work, responsive on mobile, no console errors.

**Step 3: Run full static build**

```bash
npm run build
```

Expected: Build succeeds, `out/` directory created with static files.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: compose all sections into page and finalize portfolio"
```

---

## Summary

| Task | Section | Key Features |
|------|---------|-------------|
| 1 | Project setup | Next.js scaffold, dependencies |
| 2 | Configuration | Static export, globals, fonts, metadata |
| 3 | Shared UI | MagneticButton, ParticleField, TypewriterText, AnimatedCounter, SectionHeading |
| 4 | Navigation | Fixed nav, scroll detection, mobile overlay |
| 5 | Hero | Particles, staggered name, typewriter, magnetic CTAs |
| 6 | About | Parallax photo, bio, animated stats, resume download |
| 7 | Experience | Glowing timeline, alternating cards, education |
| 8 | Skills | Progress bars, floating badges, languages |
| 9 | Contact + Footer | Contact info cards, copyright |
| 10 | Page composition | Wire all sections, verify build |
