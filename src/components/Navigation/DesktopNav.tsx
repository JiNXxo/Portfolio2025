interface DesktopNavProps {
  onNavigate: (id: string) => void;
}

const DesktopNav = ({ onNavigate }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex space-x-8">
      <button
        onClick={() => onNavigate("hero")}
        className="text-gray-100 hover:text-cyan-300 transition-colors duration-200 cursor-pointer"
      >
        Home
      </button>
      <button
        onClick={() => onNavigate("about")}
        className="text-gray-100 hover:text-cyan-300 transition-colors duration-200 cursor-pointer"
      >
        About
      </button>
      <button
        onClick={() => onNavigate("testimonials")}
        className="text-gray-100 hover:text-cyan-300 transition-colors duration-200 cursor-pointer"
      >
        Testimonials
      </button>
    </div>
  );
};

export default DesktopNav;
