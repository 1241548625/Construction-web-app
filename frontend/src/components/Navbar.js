import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
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
                <Link href="/" sx={{ textDecoration: "none" }}>
                  Home
                </Link>
              </ListItem>

              <ListItem button>
                <Link href="/project" sx={{ textDecoration: "none" }}>
                  Project
                </Link>
              </ListItem>

              <ListItem button>
                <Link href="/service" sx={{ textDecoration: "none" }}>
                  Service
                </Link>
              </ListItem>
              <ListItem button>
                <Link href="/contact" sx={{ textDecoration: "none" }}>
                  Contact
                </Link>
              </ListItem>
            </List>
          </Drawer>
        </Box>
      )}
    </div>
  );
};

export default Navbar;
