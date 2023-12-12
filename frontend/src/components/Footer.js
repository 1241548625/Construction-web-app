import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
import MapComonent from "./MapComonent";

const Footer = () => {
  const companyLocation = {
    lat: 40.6687,
    lng: -74.1143,
    address: "Bayonne, NJ",
  };

  return (
    <footer className="footer-container">
      <div className="footer-info">
        <div className="footer-company-info">
          <p>Construction Company</p>
          <p>NJ, USA</p>
          <p>Email: xxxxxx@gamil.com</p>
          <p>111-222-3333</p>
        </div>
        {/* <div className="footer-copyright">
          <CopyrightIcon></CopyrightIcon>
          <span>contsruction company</span>
        </div> */}
        <div className="footer-follow">
          <p>Follow Us</p>
          <FacebookIcon style={{ marginRight: "5px" }}></FacebookIcon>
          <InstagramIcon style={{ marginRight: "5px" }}></InstagramIcon>
          <LinkedInIcon style={{ marginRight: "5px" }}></LinkedInIcon>
        </div>
      </div>
      <div className="map-container">
        <MapComonent location={companyLocation} />
      </div>
    </footer>
  );
};

export default Footer;
