import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton = ({ isOpen, onClick }: MenuButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-cyan-300 duration-200 cursor-pointer"
      whileTap={{ scale: 0.8 }}
    >
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.div>
    </motion.button>
  );
};

export default MenuButton;
