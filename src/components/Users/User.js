import React from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  const getGender = () => {
    if (props.user.gender === "female") {
      return "Female";
    } else if (props.user.gender === "male") {
      return "Male";
    } else {
      return "No binario";
    }
  };

  return (
    <article className="card">
      <img
        className="card__img"
        src={props.user.image}
        alt={`Photo ${props.user.name}`}
        title={`Photo ${props.user.name}`}
      />
      <h4 className="card__title">{props.user.name}</h4>
      <p className="card__description">
        {props.user.city} / {getGender()}
      </p>
      <Link to={`/user/${props.user.id}`}>
        {" "}
        <button>Book a 3D consultation</button>{" "}
      </Link>
    </article>
  );
};

export default User;
