# Portfolio Website Design: Cinematic Scroll

## Overview
A modern, creative, and interactive single-page portfolio website for **Leonald Pilvera** - Virtual Assistant & Automation Expert. Rebuilt from Vite to Next.js 15 with a "Cinematic Scroll" design approach featuring immersive scroll-driven animations, micro-interactions, and dynamic effects.

## Tech Stack
- **Next.js 15** (App Router) - replacing Vite
- **React 19** + **TypeScript**
- **Tailwind CSS v4** - styling
- **Framer Motion** - all animations (scroll-triggered, gestures, layout)
- **Lucide React** - icons

## Architecture
- Single-page app deployed as a Next.js static export
- App Router with a single `page.tsx` that composes all sections
- `public/` folder carries over: `leonald-pilvera.webp` + `leonald-pilvera-resume.pdf`

## Color Palette
- Background: Deep charcoal (#0a0a0f to #111118)
- Primary accent: Electric blue (#3b82f6)
- Secondary accent: Cyan (#06b6d4)
- Text: White (#ffffff) and Gray-300 (#d1d5db)
- Card backgrounds: White at 5% opacity with backdrop blur

## Sections

### 1. Navigation
- Fixed transparent nav that gains frosted-glass backdrop on scroll
- "LP" monogram logo on the left
- Nav links on the right: Home, About, Experience, Skills, Contact
- Mobile: hamburger menu with full-screen overlay, staggered link animations
- Scroll behavior: Nav background transitions from fully transparent to backdrop-blur with a subtle border-bottom when scrolled past the hero fold

### 2. Hero
- Full-viewport dark scene with animated particle field background (subtle floating dots connected by faint lines, reacting gently to mouse movement)
- Small animated badge at top: "Virtual Assistant & Automation Expert" with a pulsing dot
- Name "LEONALD PILVERA" in large bold typography, revealed with staggered letter animation on load
- Typewriter subtitle cycling through: "Department Manager", "Automation Expert", "Team Leader"
- Two CTA buttons: "Get in Touch" (primary, solid) and "View My Work" (outline) - both with magnetic hover effect
- Scroll indicator arrow at the bottom that bounces gently
- Color palette: Deep charcoal/near-black background (#0a0a0f), electric blue (#3b82f6) and cyan (#06b6d4) accents

### 3. About
- Two-column layout that animates in on scroll
- **Left column:** Profile photo (leonald-pilvera.webp) inside a stylized frame with subtle parallax shift on scroll, colored gradient border that glows softly. "Download Resume" button below linking to the PDF.
- **Right column:**
  - Section label: "ABOUT ME" in small uppercase tracking-wide text with blue accent line
  - Heading: "Accomplished Production Team Leader"
  - Bio: "Accomplished Production Team Leader with over 3 years of experience in the BPO industry, renowned for effectively resolving complex issues, enhancing customer satisfaction, and driving operational efficiencies. Proven track record of cost optimization and profit growth through strategic leadership and continuous process improvements."
  - 3 stat cards with counting number animations:
    - "3+" years BPO experience
    - "20+" NFT projects launched
    - "80-85%" sales increase achieved
- Scroll animation: Left column slides in from left, right column from right

### 4. Experience
- Interactive vertical timeline down the center of the page
- Vertical glowing line with pulsing dots at each role
- Cards alternate left and right, sliding in from their respective sides on scroll
- Each card: Role title (bold) + date range, company name, brief description

**Roles (newest first):**
1. Department Manager - CSD (May 2024 - Present): Lead and develop high-performing teams, streamline operations, ensure alignment of departmental goals with business objectives.
2. Executive Assistant - Producer Masterminds (Nov 2022 - Apr 2024): Drive business growth, develop strategic contacts, identify emerging market opportunities, manage sales projections.
3. Direct Sales Representative - Producer Masterminds (May 2022 - Oct 2022): Assisted Web3 companies in launching and scaling projects, contributed to 20+ NFT initiatives.
4. Senior Operations Supervisor - AV Outsourcing / Citizens Disability (Jan 2019 - Apr 2020): Managed Intake team, coached customer service, led training on company services.
5. Production Team Lead - TELEOUTSOURCING (Jan 2015 - Jan 2019): Optimized revenue, increased sales by 80-85%, coordinated UK and US campaigns.
6. Marketing Manager - Yeshua Auto Air Conditioning (Apr 2014 - Dec 2014): Developed marketing materials, implemented pricing structures.
7. Professional Freelancer - Work From Home (Oct 2007 - Jun 2011): Developed strategic solutions, managed intake operations for SSDI/SSI claims.

**Education** at the bottom of timeline: BS Marine Transportation, MATS College of Technology (2011-2014), GPA: 4.00

- Hover: Cards expand slightly with subtle glow

### 5. Skills
- **Technical Skills** (left side): Animated progress bars for Programming, Web Development, Python, ReactJS, Git, Visual Studio Code
- **Soft Skills** (right side): Floating badge/pill layout with hover glow for: Innovative Thinking & Creativity, Strong Interpersonal Skills, Analytical & Critical Thinking, Advanced Problem-Solving, Effective Public Speaking, Exceptional Customer Service, Team Leadership & Collaboration, Strong Communication Skills, Active Listening & Engagement
- **Languages** at the bottom: English and Filipino as small badges
- Scroll animation: Section fades up, individual items stagger in

### 6. Contact
- "Let's Work Together" heading with gradient text
- Brief line: "Ready to streamline your operations? Let's connect."
- Contact info with icon hover animations:
  - Email: pilveraleonald@gmail.com
  - Phone: +639515200853
  - LinkedIn: linkedin.com/in/leonaldpilvera948a111a6
- No contact form - just display contact information

### 7. Footer
- Single line: "© 2025 Leonald Pilvera. All rights reserved."
- Optional social links

## Interactive Effects
- Scroll-triggered entrance animations (Framer Motion `whileInView`)
- Particle background reacting to mouse movement
- Magnetic hover on buttons (button subtly follows cursor)
- Typewriter text cycling through roles
- Number counting animations on stat cards
- Timeline dot pulsing when in viewport
- Skill bar fill animations on scroll
- Staggered item reveals throughout

## Content Source
All content derived from `public/leonald-pilvera-resume.pdf`. Profile photo from `public/leonald-pilvera.webp`.
