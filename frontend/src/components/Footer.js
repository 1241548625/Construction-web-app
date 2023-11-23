import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-copyright">
        <CopyrightIcon></CopyrightIcon>
        <span>contsruction company</span>
      </div>
      <div className="footer-title">
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <LinkedInIcon></LinkedInIcon>
      </div>
    </div>
  );
};

export default Footer;
