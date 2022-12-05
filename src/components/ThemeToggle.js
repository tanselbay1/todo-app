import { ReactComponent as IconMoon } from "../assets/images/icon-moon.svg";
import { ReactComponent as IconSun } from "../assets/images/icon-sun.svg";
import { motion } from "framer-motion";

const ThemeToggle = ({ isDark, setIsDark }) => {
  const handleToggle = () => {
    setIsDark();
  };

  return isDark ? (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <IconSun onClick={handleToggle} className="theme-toggle" />
    </motion.div>
  ) : (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <IconMoon onClick={handleToggle} className="theme-toggle" />
    </motion.div>
  );
};

export default ThemeToggle;
