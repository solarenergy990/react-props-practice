import React, { useState } from "react";
import s from "./StateButtons.module.css";

const StateButtons = () => {
  const [count, setCount] = useState(0);
  const [countSecond, setCountSecond] = useState(0);
  const [hiddenText, setHiddenText] = useState(true);

  const onClickMeButtonClick = () => {
    return setCount(count + 1);
  };

  const onRefreshButtonClick = () => {
    return setCount(0);
  };

  const onIncrement = () => {
    return setCountSecond(countSecond + 10);
  };

  const onDecrement = () => {
    return setCountSecond(countSecond - 10);
  };

  const onShowTextClick = () => {
    return setHiddenText(false);
  };

  const onHideTextClick = () => {
    return setHiddenText(true);
  };

  return (
    <>
      <div className={s.wrapper}>
        <p>You have clicked {count} times</p>
        <div className={s.button}>
          <button
            type="button"
            onClick={() => onClickMeButtonClick()}
            className="btn btn-primary"
          >
            Click me!
          </button>
        </div>
        <div className={s.button}>
          <button
            type="button"
            onClick={() => onRefreshButtonClick()}
            className="btn btn-primary"
          >
            Refresh Counter
          </button>
        </div>
      </div>

      <div className={s.wrapper}>
        <p>You have added {countSecond} by one click</p>
        <div className={s.button}>
          <button
            type="button"
            onClick={() => onIncrement()}
            className="btn btn-primary"
          >
            + 10
          </button>
        </div>
        <div className={s.button}>
          <button
            type="button"
            onClick={() => onDecrement()}
            className="btn btn-primary"
          >
            - 10
          </button>
        </div>
      </div>

      <div className={s.wrapper}>
        {!hiddenText ? (
          <div className={s.button}>
            <button
              type="button"
              onClick={() => onHideTextClick()}
              className="btn btn-danger"
            >
              Hide Text
            </button>
          </div>
        ) : (
          <div className={s.button}>
            <button
              type="button"
              onClick={() => onShowTextClick()}
              className="btn btn-success"
            >
              Show text
            </button>
          </div>
        )}

        {!hiddenText && (
          <p className={s.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        )}
      </div>
    </>
  );
};

export default StateButtons;
