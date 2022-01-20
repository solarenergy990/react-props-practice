import React, { useState } from "react";
import s from "./Content.module.css";

import Alert from "./Alert/Alert";

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
    </div>
  );
};

export default Content;
