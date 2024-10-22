import { MdDarkMode, MdLightMode } from "react-icons/md";
import {  Link } from "react-router-dom";
import { useThemeContext } from "../Context/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div
      className={`header-container ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      <header>
        <h2 className="title">
          <Link
            to="/country-list/"
            className="nav_brand"
          >
            Where in the world
          </Link>
        </h2>

        <p className="dark_light--mode" onClick={toggleTheme}>
          <span>{theme === "light" ? <MdDarkMode /> : <MdLightMode />}</span>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </p>
      </header>
    </div>
  );
};
