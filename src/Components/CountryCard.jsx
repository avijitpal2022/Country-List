import { NavLink } from "react-router-dom";
import { useThemeContext } from "../Context/ThemeContext";

export const CountryCard = ({ curCountry, name }) => {
  const { population, region, capital, flags } = curCountry;

  const { theme } = useThemeContext();

  return (
    <NavLink
      className={`country_card ${
        theme === "light" ? "text-dark" : "text-light"
      }`}
      to={`/${name}`}
    >
      <div className="country_flag">
        <img src={flags.png} alt="" />
      </div>

      <div className="country_content">
        <h2 className="country_name">{name}</h2>
        <div className="country_details">
          <p>
            <b>Population:</b> {population.toLocaleString("en-IN")}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </div>
    </NavLink>
  );
};
