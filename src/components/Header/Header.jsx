import React from "react";
import s from "./Header.module.css";
import Svg from "../../UI/Svg/Svg";
// const imgUrl = "";

const Header = ({ children }) => {
  return (
    <div>
      <header className={s.header}>
        {children}
        <h1 className={s.title}>Shark factory</h1>
        <div className={s.wrapper}>
          <Svg iconName="logo" className={s.icon} />
        </div>
      </header>
    </div>
  );
};

export default Header;
