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
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="block w-full text-center px-3 py-2 text-gray-600 hover:text-gray-900"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
