import React from "react";
import s from "./Card.module.css";

const Card = ({ catsImg }) => {
  const { webformatURL, likes, user, tags } = catsImg;
  return (
    <li className={s.item}>
      <div className="card">
        <img src={webformatURL} className="card-img-top" alt={tags} />
        <div className="card-body">
          <h5 className="card-title">{user}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="card-text">Likes: {likes}</p>

          <button type="button" className="btn btn-primary">
            Some button
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
