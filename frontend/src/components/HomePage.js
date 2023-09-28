import React from "react";
import Navbar from "./Navbar";
import "./Home.css";

const HomePage = () => {
  return (
    <div className="page">
      <Navbar></Navbar>
      <div className="container">
        <div className="up-level">
          <div className="intro1">
            <h1>WE ARE BUILDING YOUR DREAM HOUSE</h1>
            <p>
              At Qu Construction Inc, we're more than just builders; we're
              creators of lasting impressions. Our commitment to excellence and
              passion for construction drive us to turn your vision into
              reality.
            </p>
          </div>

          <div className="picture1"></div>
        </div>
        <div className="down-level">
          <div className="intro2">
            <p>
              With years of experience and a team of skilled professionals, we
              have established ourselves as a trusted name in the construction
              industry. Our dedication to quality, innovation, and customer
              satisfaction is at the core of everything we do.
            </p>
          </div>
          <div className="picture2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
