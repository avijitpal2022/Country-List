import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import "./Country.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { useThemeContext } from "../Context/ThemeContext";
import { useEffect, useState } from "react";
import { CountryShimmer } from "./CountryShimmer";

export const Country = () => {
  const [borderNames, setBorderNames] = useState([]);
  const [loading, setLoading] = useState(true);

  const { theme } = useThemeContext();
  const countryData = useLoaderData();
  // console.log(countryData);
  const navigate = useNavigate();

  // Back button functionality
  const handleBack = () => {
    navigate(-1);
  };

  // Fetch Country Data
  const isCountryDataValid = countryData && countryData.length > 0;
  const data = isCountryDataValid ? countryData[0] : null;

  useEffect(() => {
    if (isCountryDataValid && data.borders && data.borders.length > 0) {
      const fetchBorderData = async () => {
        try {
          const borderPromises = data.borders.map(async (border) => {
            const response = await fetch(
              `https://restcountries.com/v3.1/alpha/${border}?fullText=true`
            );
            const [borderData] = await response.json();
            return borderData.name.common;
          });

          const fetchBorderNames = await Promise.all(borderPromises);
          setBorderNames(fetchBorderNames);
        } catch (error) {
          console.log(error);
        }
      };

      fetchBorderData();
    }
  }, [isCountryDataValid, data]);

  useEffect(() => {
    setTimeout(() => {
      if (countryData.length > 0) {
        setLoading(false);
      }
    }, 200);
  }, [countryData]);

  // if valid country name not found show this component
  if (!isCountryDataValid) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "40px" }}>
          Country Not Found
        </h1>
        <button
          style={{
            border: "2px solid #ccc",
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "transparent",
          }}
        >
          <NavLink
            to={"/"}
            style={{ textDecoration: "none", color: "#242424" }}
            className={`${theme === "light" ? "text-dark" : "text-light"}`}
          >
            Back to Home
          </NavLink>
        </button>
      </div>
    );
  }

  // De structure country data
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    flags,
  } = data;

  const languageString = Object.values(languages).join(", "); // Get country all languages

  // Get country all currencies
  const currenciesString = Object.values(currencies)
    .map((currency) => currency.name)
    .join(". ");

  const toggleTheme = () => {
    return theme === "light" ? "light" : "dark";
  };

  // Shimmer Effect
  if (loading) {
    return (
      <main className={`${toggleTheme()}`}>
        <CountryShimmer />
      </main>
    );
  }

  return (
    <main className={`${toggleTheme()}`}>
      <div className="country">
        <button onClick={handleBack} className={`${toggleTheme()}`}>
          <BsArrowLeftShort />
          Back
        </button>
        <div className="country_details">

          <img src={flags.svg} alt={flags.alt} />
          
          <div className="country_all_data">
            <h1>{name?.common}</h1>
            <div>
              <p className="native-name">
                <strong>Native Name:</strong> {name.common}
              </p>
              <p>
                <strong>Population:</strong>{" "}
                {population.toLocaleString("en-IN")}
              </p>
              <p>
                <strong>Region:</strong> {region}
              </p>
              <p>
                <strong>Sub Region:</strong> {subregion}
              </p>
              <p>
                <strong>Capital:</strong> {capital}
              </p>
              <p>
                <strong>Top Level Domain:</strong> {tld.join(", ")}
              </p>
              <p>
                <strong>Currencies:</strong> {currenciesString}
              </p>
              <p>
                <strong>Languages:</strong> {languageString}
              </p>
            </div>
            {borderNames.length > 0 && (
              <h2 className="border_country-main">
                Border Countries:{" "}
                {borderNames.map((borderName) => {
                  return (
                    <NavLink
                      className={`border_country ${toggleTheme()}`}
                      key={borderName}
                      to={`/${borderName}`}
                    >
                      {borderName}
                    </NavLink>
                  );
                })}
              </h2>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
