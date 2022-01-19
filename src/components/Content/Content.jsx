import React, { useState } from "react";

import Alert from "./Alert/Alert";

const Content = () => {
  const [activeButton, setActiveButton] = useState(false);

  return (
    <div>
      {!activeButton && (
        <button
          type="button"
          className="btn btn-danger btn-lg"
          onClick={() => setActiveButton(true)}
        >
          Alert button
        </button>
      )}

      {activeButton && <Alert />}
    </div>
  );
};

export default Content;
