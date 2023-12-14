import React from "react";

const currentYear = new Date().getFullYear();
const Footer = () => (
  <footer>
    <div>
      {/* <a href='bestcoirsandexports@gmail.com'>bestcoirsandexports@gmail.com</a> */}
      <p className="footer-links">
      <a href="https://github.com/Roshiniswetha/healthy-basket-frontend" target="_blank" rel="noopener noreferrer">
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:contact@swetharavindran24@gmail.com" target="_blank" rel="noopener noreferrer">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/Roshiniswetha" target="_blank" rel="noopener noreferrer">
          Say Hi on Twitter
        </a>
        <span> / </span>
      </p>
      <p>
        &copy; {currentYear} <strong>Best Coir and Exports</strong>
      </p>
    </div>
  </footer>
);

export default Footer;