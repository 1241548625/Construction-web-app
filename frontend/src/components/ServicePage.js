import React from "react";
import Navbar from "./Navbar";
import "./ServicePage.css";
import p1 from "../asset/ServicePage1.jpg";
import p2 from "../asset/ServicePage2.jpg";

const ServicePage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div className="section">
          <div className="text">
            <h1>Residential Construction</h1>
            <p>
              From custom homes to renovations and additions, we bring your
              residential dreams to life. Our team of skilled craftsmen and
              designers ensure that your home reflects your unique style and
              meets the highest quality standards.
            </p>
          </div>
          <img className="pic" src={p1} alt="P1" />
        </div>
        <div className="section">
          <div className="text">
            <h1>Commercial Construction</h1>
            <p>
              From custom homes to renovations and additions, we bring your
              residential dreams to life. Our team of skilled craftsmen and
              designers ensure that your home reflects your unique style and
              meets the highest quality standards.
            </p>
          </div>
          <div className="text">
            <h1>Renovations and Remodeling</h1>
            <p>
              Enhance the value and beauty of your existing property with our
              renovation and remodeling expertise. We breathe new life into old
              spaces, creating functional and stylish environments that match
              your evolving needs.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="text">
            <h1>Consulting and Planning</h1>
            <p>
              Not sure where to start? Our expert consultants can help you with
              feasibility studies, budgeting, and project planning. We provide
              valuable insights to guide your construction decisions.
            </p>
          </div>
          <img className="pic" src={p2} alt="P2" />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
