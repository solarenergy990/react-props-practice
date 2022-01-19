import React from "react";

const Footer = (getCurrentYear) => {
  const { onGetCurrentYear } = getCurrentYear;
  return (
    <footer>
      <div>
        <span>@copyright all rights reserved {onGetCurrentYear}.</span>
      </div>
    </footer>
  );
};

export default Footer;
