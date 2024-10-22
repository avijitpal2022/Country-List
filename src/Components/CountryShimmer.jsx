import React from "react";
import "./CountryShimmer.css";
import { useThemeContext } from "../Context/ThemeContext";

export const CountryShimmer = () => {
  const { theme } = useThemeContext();

  const toggleTheme = () => {
    return theme === "light" ? "light" : "dark"
  }

  return (
      <div className="country">
        <div className={`shimmer_button ${toggleTheme()}`}></div>
        <div className="country_details">
          <div className={`country_flag-1 shimmer-flag ${toggleTheme()}`}></div>
          <div className="country_all_data country_shimmer_data">
            <div className={`div1 ${toggleTheme()}`}></div>

            <div className="paragraph_divs">
              <div className={`${toggleTheme()}`}></div>
              <div className={`${toggleTheme()}`}></div>
              <div className={`${toggleTheme()}`}></div>
              <div className={`${toggleTheme()}`}></div>
            </div>
            <div className={`last_div ${toggleTheme()}`}></div>
          </div>
        </div>
      </div>
  );
};
