import React, { useState } from "react";
import { Link as Link2 } from "react-scroll";

import "./Navbar.css";
import { useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:930px)");

  return (
    <div>
      {isNonMobile ? (
        <nav className="outside-box">
          <div className="logo-box">CONSTRUCTION</div>
          <ul className="header-menu">
            <li>
              <Link2
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="/"
                style={{ cursor: "pointer" }}
              >
                Home
              </Link2>
            </li>
            <li>
              <Link2
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="project-section"
                style={{ cursor: "pointer" }}
              >
                Project
              </Link2>
            </li>
            <li>
              <Link2
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="service"
                style={{ cursor: "pointer" }}
              >
                Service
              </Link2>
            </li>
            <li>
              <Link2
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="contact"
                style={{ cursor: "pointer" }}
              >
                Contact
              </Link2>
            </li>
            <li>
              <Link2
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="about"
                style={{ cursor: "pointer" }}
              >
                About
              </Link2>
            </li>
          </ul>
        </nav>
      ) : (
        <Box
          sx={{ flexGrow: 1 }}
          // onClick={() => setIsDrawerOpen(false)}
        >
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: "white",
              boxShadow: "none",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                // color="inherit"
                aria-label="menu"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                // sx={{ zIndex: 1000000 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
              >
                Construction
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            sx={{ mt: "10%" }}
            open={isDrawerOpen}
            anchor="top"
            onClose={() => setIsDrawerOpen(false)}
          >
            <Toolbar sx={{ backgroundColor: "white" }} />
            <List
              sx={{ backgroundColor: "white" }}
              onClick={() => setIsDrawerOpen(false)}
            >
              <ListItem button>
                {/* <Link href="/" sx={{ textDecoration: "none" }}>
                  Home
                </Link> */}
                <Link2
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="/"
                >
                  Home
                </Link2>
              </ListItem>

              <ListItem button>
                {/* <Link href="#project" sx={{ textDecoration: "none" }}>
                  Project
                </Link> */}
                <Link2
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="project"
                >
                  Project
                </Link2>
              </ListItem>

              <ListItem button>
                {/* <Link href="#service" sx={{ textDecoration: "none" }}>
                  Service
                </Link> */}
                <Link2
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="service"
                >
                  Service
                </Link2>
              </ListItem>
              <ListItem button>
                {/* <Link href="#contact" sx={{ textDecoration: "none" }}>
                  Contact
                </Link> */}
                <Link2
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="contact"
                >
                  Contact
                </Link2>
              </ListItem>
              <ListItem button>
                {/* <Link href="#about" sx={{ textDecoration: "none" }}>
                  About
                </Link> */}
                <Link2
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  to="about"
                >
                  About
                </Link2>
              </ListItem>
            </List>
          </Drawer>
        </Box>
      )}

      <Outlet />
    </div>
  );
};

export default Navbar;
