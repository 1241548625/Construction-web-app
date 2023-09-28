import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="outside-box">
        <div className="logo-box">QU CONSTRUCTION</div>
        <ul className="header-menu">
          <li>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link underline="hover" color="inherit" href="/project">
              Project
            </Link>
          </li>
          <li>
            <Link underline="hover" color="inherit" href="/Service">
              Service
            </Link>
          </li>
          <li>
            <Link underline="hover" color="inherit" href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link underline="hover" color="inherit" href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
