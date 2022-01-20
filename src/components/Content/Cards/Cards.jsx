import React, { useEffect, useState } from "react";
import s from "./Cards.module.css";

import Card from "./Card/Card";

import catsAPI from "../../../services/cats-api";

const Cards = () => {
  const [cats, setCats] = useState(null);
  const [activeButton, setActiveButton] = useState(false);

  const onHandleClick = () => {
    setActiveButton(true);
  };

  useEffect(() => {
    if (!activeButton) return;

    const fetchCats = async () => {
      await catsAPI().then((res) => {
        setCats(res);
      });
    };
    fetchCats();
  }, [activeButton]);

  return (
    <div>
      {!cats && (
        <div className={s.wrapper}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onHandleClick()}
          >
            Team Mates
          </button>
        </div>
      )}

      <ul className={s.list}>
        {cats &&
          cats.map((cat) => {
            const { id } = cat;
            return (
              <div key={id}>
                <Card catsImg={cat} />
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Cards;
