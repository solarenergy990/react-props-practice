import React, { useState } from "react";
import s from "./Content.module.css";

import Alert from "./Alert/Alert";
import Cards from "./Cards/Cards";
import StateButtons from "./StateButtons/StateButtons";

const Content = () => {
  const [activeButton, setActiveButton] = useState(false);

  return (
    <div>
      {!activeButton && (
        <div className={s.wrapper}>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            onClick={() => setActiveButton(true)}
          >
            Alert button
          </button>
        </div>
      )}
      {activeButton && (
        <Alert
          onActiveButton={activeButton}
          onSetActiveButton={setActiveButton}
        />
      )}
      <Cards />
      <StateButtons />
    </div>
  );
};

export default Content;
