import React from "react";
import s from "./Nav.module.css";

const Nav = ({ navItems }) => {
  return (
    <div>
      <nav className={s.nav}>
        <ul className={s.list}>
          {navItems.map((nav) => {
            console.log(nav);
            const { title, link, id } = nav;
            return (
              <li key={id}>
                <div>
                  <a href={link}>{title}</a>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
