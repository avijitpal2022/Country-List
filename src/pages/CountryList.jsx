import { useLoaderData } from "react-router-dom";
import { CountryCard } from "../Components/CountryCard";
import { useEffect, useState } from "react";
import { ShimmerEffect } from "../Components/ShimmerEffect";
import { Search } from "../Components/Search";
import { Filter } from "../Components/Filter";
import { useThemeContext } from "../Context/ThemeContext";

export const CountryList = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const { theme } = useThemeContext();

  const countryData = useLoaderData();

  useEffect(() => {
    setTimeout(() => {
      if (countryData.length > 0) {
        setLoading(false);
      }
    }, 500);
  }, [countryData]);

  // Search Functionality
  const searchData = countryData
    .filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    )
    .filter(
      (country) => region === "" || country.region.toLowerCase() === region
    );


  // Shimmer effect 
  if (loading) {
    return (
      <main className={`${theme === "light" ? "light" : "dark"}`}>
        <div className="search-and-filter">
          <Search setSearch={setSearch} search={search} />

          <Filter setRegion={setRegion} region={region} />
        </div>
        <div className="all_country_cards grid-col-4">
          {Array(24)
            .fill(0)
            .map((_, index) => (
              <ShimmerEffect key={index} />
            ))}
        </div>
      </main>
    );
  }

  // console.log(region);

  return (
    <>
      <main className={`${theme} === "light" ? "light" : "dark"`}>
        <div className="search-and-filter">
          <Search setSearch={setSearch} search={search} />

          <Filter setRegion={setRegion} region={region} />
        </div>

        <div className="all_country_cards grid-col-4">
          {searchData.map((curCountry) => {
            return (
              <CountryCard
                curCountry={curCountry}
                name={curCountry.name.common}
                key={curCountry.name.common}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};
