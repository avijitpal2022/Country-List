import React from "react";
import { IoSearch } from "react-icons/io5";
import { useThemeContext } from "../Context/ThemeContext";

export const Search = ({ setSearch, search }) => {
  const { theme } = useThemeContext();
  return (
    <div className="search-div">
      <p>
        <IoSearch className="search-ico" />
      </p>
      <input className={`${
        theme === "light" ? "text-dark" : "text-light"
      }`}
        placeholder="Search for a country..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
