import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              src={props.srcwork}
              alt="Travel Image"
            />
            <img
              className="cards__item__img_profile"
              src={props.srcprofile}
              alt="Profile Image"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
          <h5 className="cards__item__text_price">{props.price}</h5>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
