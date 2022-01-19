import React from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

import currentYear from "../../helpers/currentYear/currentYear";

import navItems from "../../mock/menu.json";

function App() {
  return (
    <div>
      <Header>
        <Nav navItems={navItems} />
      </Header>
      <main>
        <Content />
      </main>
      <Footer getCurrentYear={currentYear()} />
    </div>
  );
}

export default App;
