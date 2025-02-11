interface NavItem {
  id: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  navItems: NavItem[];
  onNavigate: (id: string) => void;
}

const MobileNav = ({ isOpen, navItems, onNavigate }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="block w-full text-left px-3 py-2 text-gray-100 hover:text-cyan-300 hover:bg-white/10 rounded transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
