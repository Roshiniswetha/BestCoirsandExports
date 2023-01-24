import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
// import logo from "./assets/images/logo-header.svg";
import logo from "../../assets/images/coconut.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Navbar.css";

const Navbar = ({sections}) => {
  return (
    <header className="header" id="header">
      <a href="/" className="logo_link">
        <img className="logo_img" src={logo} alt="Enterprise League Logo" />
      </a>
      <Typography>Best Coirs and Exports</Typography>
      <div className="header_navigation">
      {sections.map((section) => (
        <div>
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
            <KeyboardArrowDownIcon />
          </Link>
        </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
