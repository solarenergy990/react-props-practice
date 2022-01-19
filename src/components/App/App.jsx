import React from "react";

import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import currentYear from "../../helpers/currentYear/currentYear";

import navItems from "../../mock/menu.json";

console.log(currentYear);

function App() {
  return (
    <div>
      <main>
        <Header>
          <Nav navItems={navItems} />
        </Header>

        <Footer getCurrentYear={currentYear()} />
      </main>
    </div>
  );
}

export default App;
