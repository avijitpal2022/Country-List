import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import errorImage from "../assets/404_page-gif.gif";
import "./Error.css";

export const ErrorPage = () => {
  const navigate = useNavigate();

  // Back Previous page functionality
  const handlePrevPage = () => {
    navigate(-1);
  };

  return (
    <section className="section_error">
      <div className="err-div">
        <h1 className="four-o-four-text">404</h1>
        <figure className="err-figure">
          <img src={errorImage} alt="" />
        </figure>

        <div className="err-text">
          <h1>Look like {`you're`} lost</h1>
          <p>the page you are looking for not available</p>
          <button onClick={handlePrevPage}>Back to Previous page</button>
          <NavLink to="/" className="back-btn">
            Go to Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};
