import { useState } from "react";
import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MenuButton from "./MenuButton";
import MobileNav from "./MobileNav";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "testimonials", label: "Testimonials" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-xs z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <DesktopNav onNavigate={scrollToSection} />
          <div className="md:hidden">
            <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <MobileNav
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navItems={navItems}
          onNavigate={scrollToSection}
        />
      </div>
    </nav>
  );
};

export default Navigation;
