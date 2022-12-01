import { ReactComponent as IconMoon } from "../assets/images/icon-moon.svg";
import { ReactComponent as IconSun } from "../assets/images/icon-sun.svg";

const ThemeToggle = ({ isDark, setIsDark }) => {
  const handleToggle = () => {
    setIsDark();
  };

  return isDark ? (
    <IconSun onClick={handleToggle} className="theme-toggle" />
  ) : (
    <IconMoon onClick={handleToggle} className="theme-toggle" />
  );
};

export default ThemeToggle;
