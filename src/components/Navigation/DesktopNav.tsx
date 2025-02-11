interface DesktopNavProps {
  onNavigate: (id: string) => void;
}

const DesktopNav = ({ onNavigate }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex space-x-8">
      <button
        onClick={() => onNavigate("hero")}
        className="text-gray-600 hover:text-gray-900"
      >
        Home
      </button>
      <button
        onClick={() => onNavigate("about")}
        className="text-gray-600 hover:text-gray-900"
      >
        About
      </button>
      <button
        onClick={() => onNavigate("testimonials")}
        className="text-gray-600 hover:text-gray-900"
      >
        Testimonials
      </button>
    </div>
  );
};

export default DesktopNav;
