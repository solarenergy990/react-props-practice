import React, { useState, useEffect } from "react";
import s from "./Alert.module.css";

const initialTimeout = 7000;

const Alert = ({ onActiveButton, onSetActiveButton }) => {
  const [counter, setCounter] = useState(initialTimeout / 1000);

  useEffect(() => {
    if (onActiveButton) {
      const timer =
        counter > 0
          ? setInterval(() => setCounter(counter - 1), 1000)
          : onSetActiveButton(false);

      return () => clearInterval(timer);
    }
  }, [counter, onActiveButton, onSetActiveButton]);

  return (
    <div className={s.alert}>
      <div className="alert alert-success alert-dismissible" role="alert">
        <h4 className="alert-heading">
          Good Job! You have pressed the button!
        </h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <hr />
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <hr />
        <p className="mb-0">
          The alert will close automatically in: {counter}s.
        </p>

        <button
          type="button"
          className={s.button}
          onClick={() => onSetActiveButton(false)}
        >
          <span>Got it!</span>
        </button>
      </div>
    </div>
  );
};

export default Alert;
