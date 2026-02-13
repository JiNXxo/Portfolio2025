import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
