import React from "react";
import Navbar from "./Navbar";
import "./Home.css";
import HomeImage1 from "../asset/HomePage.jpg";

const HomePage = () => {
  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="container">
        <div className="up-level">
          <div className="intro1">
            {/* <h1>WE ARE BUILDING YOUR DREAM HOUSE</h1>
            <p>
              At Qu Construction Inc, we're more than just builders; we're
              creators of lasting impressions. Our commitment to excellence and
              passion for construction drive us to turn your vision into
              reality.
            </p> */}
          </div>
          <div className="picture1">
            <image className="pic1" src={HomeImage1}></image>
          </div>
        </div>
        <div className="down-level"></div>
      </div>
    </div>
  );
};

export default HomePage;
