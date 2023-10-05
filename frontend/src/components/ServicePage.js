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
          <div className="text">
            <h1>Commercial Construction</h1>
            <p>
              From custom homes to renovations and additions, we bring your
              residential dreams to life. Our team of skilled craftsmen and
              designers ensure that your home reflects your unique style and
              meets the highest quality standards. Lorem Ipsum is simply dummy
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
          <div className="text">
            <h1>Renovations and Remodeling</h1>
            <p>
              Enhance the value and beauty of your existing property with our
              renovation and remodeling expertise. We breathe new life into old
              spaces, creating functional and stylish environments that match
              your evolving needs.Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="text">
            <h1>Consulting and Planning</h1>
            <p>
              Not sure where to start? Our expert consultants can help you with
              feasibility studies, budgeting, and project planning. We provide
              valuable insights to guide your construction decisions.Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <img className="pic" src={p2} alt="P2" />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
