interface DesktopNavProps {
  onNavigate: (id: string) => void;
}

const DesktopNav = ({ onNavigate }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex space-x-8">
      <button
        onClick={() => onNavigate("hero")}
        className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
      >
        Home
      </button>
      <button
        onClick={() => onNavigate("about")}
        className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
      >
        About
      </button>
      <button
        onClick={() => onNavigate("testimonials")}
        className="text-gray-100 hover:text-cyan-300 transition-colors duration-200"
      >
        Testimonials
      </button>
    </div>
  );
};

export default DesktopNav;
