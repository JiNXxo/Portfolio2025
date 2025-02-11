import { X } from 'lucide-react';
import Logo from './Logo';
interface NavItem {
  id: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  navItems: NavItem[];
  onNavigate: (id: string) => void;
  onClose: () => void;
}

const MobileNav = ({ isOpen, navItems, onNavigate, onClose }: MobileNavProps) => {
  // Handle navigation and close menu
  const handleNavClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full h-screen z-50 md:hidden
        bg-gray-900 backdrop-blur-md 
        transform transition-transform duration-200 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="p-4">
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between mb-12">
          <Logo />
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="space-y-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="
                block w-full text-left
                text-gray-200 hover:text-blue-400
                transition-colors duration-200
              "
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
