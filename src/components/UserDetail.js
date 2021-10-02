import React from "react";
import { Link } from "react-router-dom";

const UserDetail = (props) => {
  return (
    <div className="card">
      <Link to="/">Home</Link>
      <header>
        <h2>{props.user.name}</h2>
      </header>
      <section>
        <img
          className="card__img"
          src={props.user.image}
          alt={props.user.name}
        />
        <h4 className="card__title">{props.user.name}</h4>
        <ul className="ml-1 mt-1">
          <li>Gender: {props.user.gender}</li>
          <li>Email: {props.user.email}</li>
          <li>City: {props.user.city}</li>
          <li>Country: {props.user.country}</li>
        </ul>
      </section>
    </div>
  );
};

export default UserDetail;
