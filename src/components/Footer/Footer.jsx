import React from "react";

const Footer = ({ getCurrentYear }) => {
  return (
    <footer>
      <div>
        <span>@copyright all rights reserved {getCurrentYear}.</span>
      </div>
    </footer>
  );
};

export default Footer;
