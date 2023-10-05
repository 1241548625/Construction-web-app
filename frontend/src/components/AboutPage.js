import React from "react";
import Navbar from "./Navbar";
import "./ServicePage.css";
import p1 from "../asset/About3.jpg";
import p2 from "../asset/about1.jpg";

const AboutPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="section">
          <div className="text">
            <h1>OUR MISSION</h1>
            <p>
              From custom homes to renovations and additions, we bring your
              residential dreams to life. Our team of skilled craftsmen and
              designers ensure that your home reflects your unique style and
              meets the highest quality standards.Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <img className="pic" src={p1} alt="P1" />
        </div>
        <div className="section">
          <img className="pic" src={p2} alt="P1" />
          <div className="text">
            <h1>OUR TEAM</h1>
            <p>
              Our success is a testament to the hard work and dedication of our
              talented team. From skilled craftsmen to experienced project
              managers, every member of our team plays a crucial role in turning
              your vision into reality. We take pride in our commitment to
              ongoing training and professional development, ensuring that we
              stay at the forefront of industry trends and technologies. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
