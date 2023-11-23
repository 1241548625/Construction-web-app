import React from "react";
import Navbar from "./Navbar";
import "./ServicePage.css";
import p1 from "../asset/About3.jpg";
import p2 from "../asset/about1.jpg";
import Line from "./Line";

const AboutPage = () => {
  return (
    <div className="container" id="about">
      <Line />
      <p className="about-title">About us</p>
      <div className="section">
        <div className="text" data-aos="fade-right">
          <h1>OUR MISSION</h1>
          <p>
            From custom homes to renovations and additions, we bring your
            residential dreams to life. Our team of skilled craftsmen and
            designers ensure that your home reflects your unique style and meets
            the highest quality standards.
          </p>
        </div>
        <img className="pic" src={p1} alt="P1" data-aos="fade-left" />
      </div>
      <div className="section">
        <img className="pic" src={p2} alt="P1" data-aos="fade-right" />
        <div className="text" data-aos="fade-left">
          <h1>OUR TEAM</h1>
          <p>
            Our success is a testament to the hard work and dedication of our
            talented team. From skilled craftsmen to experienced project
            managers, every member of our team plays a crucial role in turning
            your vision into reality. We take pride in our commitment to ongoing
            training and professional development, ensuring that we stay at the
            forefront of industry trends and technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
