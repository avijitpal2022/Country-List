import React from "react";
import { useThemeContext } from "../Context/ThemeContext";

export const Filter = ({ setRegion, region }) => {
  const { theme } = useThemeContext();

  return (
    <div className={`filter-div ${theme === 'light' ? "light" : "secondary-dark text-light"}`}>
      <select className={`${theme === 'light' ? "light text-dark" : "text-light secondary-dark"}`} value={region} onChange={(e) => setRegion(e.target.value)}>
        <option value="" hidden>
          Filter By Region
        </option>
        <option value="">All Regions</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};
