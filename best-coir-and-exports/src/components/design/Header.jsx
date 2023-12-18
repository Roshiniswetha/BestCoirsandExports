import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
// import logo from "./assets/images/logo-header.svg";
import logo from "../../assets/images/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Header = ({sections}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header className="header" id="header">
      <div className="logo_link">
      <a href="/">
        <img className="logo_img" src={logo} alt="Enterprise League Logo" />
      </a>
        <Typography className='header-name' variant="h3" gutterBottom>Best Coirs and Exports</Typography>
      </div>
      <div className="header_navigation">
      {sections.map((section) => (
        <div className='header_link'>
          <Link
            component="button"
            underline={location.pathname.replace('/','') === ((section.title).toLowerCase()) ? 'always' : 'hover' }
            className="header_menu"
            color="inherit"
            noWrap
            key={section.title}
            variant="h7"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
            onClick = {()=>navigate(section.url)}
          >
            {section.title}
            {/* <KeyboardArrowDownIcon /> */}
          </Link>
        </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
