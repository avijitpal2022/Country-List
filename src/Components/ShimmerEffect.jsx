import React from "react";
import "./Shimmer.css";
import { useThemeContext } from "../Context/ThemeContext";

export const ShimmerEffect = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`country_card shimmer_card ${theme === "light" ? "light" : "dark"}`}>
      <div className={`shimmer_heading ${theme === "light" ? "light" : "dark"}`}>
        <div className="child-div"></div>
        <div className="child-div"></div>
        <div className="child-div"></div>
        <div className="child-div"></div>
      </div>
    </div>
  );
};
