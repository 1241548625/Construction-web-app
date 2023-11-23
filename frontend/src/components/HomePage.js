import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="page" id="/">
      <div className="container">
        <div className="up-level">
          <div className="intro1" data-aos="fade-right">
            <h1>WE ARE BUILDING YOUR DREAM HOUSE</h1>
            <p>
              At Construction Inc, we're more than just builders; we're creators
              of lasting impressions. Our commitment to excellence and passion
              for construction drive us to turn your vision into reality.
            </p>
          </div>

          <div className="picture1"></div>
        </div>
        <div className="down-level">
          <div className="intro2" data-aos="fade-left">
            <p>
              With years of experience and a team of skilled professionals, we
              have established ourselves as a trusted name in the construction
              industry. Our dedication to quality, innovation, and customer
              satisfaction is at the core of everything we do.
            </p>
          </div>
          <div className="picture2" data-aos="fade-right"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
