import React from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/users/userCard.scss";

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
    <article className="user">
      <img
        className="user__img"
        src={props.user.image}
        alt={`Photo ${props.user.name}`}
        title={`Photo ${props.user.name}`}
      />
      <h4 className="user__name">{props.user.name}</h4>
      <p className="user__info">
        {props.user.city} / {getGender()}
      </p>
      <Link to={`/user/${props.user.id}`}>
        {" "}
        <button className="user__button">Book a 3D consultation</button>{" "}
      </Link>
    </article>
  );
};

export default User;
