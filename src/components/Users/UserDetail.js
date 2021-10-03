import React, { useState } from "react";
import { Link } from "react-router-dom";
import Booking from "../Booking";
import Registration from "../Registration";

const UserDetail = (props) => {
  return (
    <>
      <Link to="/">Home</Link>
      <div className="card">
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
        </section>
      </div>
      <div>
        <ul className="ml-1 mt-1">
          <li>
            About: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            dolor maxime quas praesentium, impedit hic reprehenderit quibusdam
            voluptatum dicta eaque, exercitationem ipsam. Nobis beatae nisi
            officiis? Quisquam pariatur ratione enim.
          </li>
          <li>Gender: {props.user.gender}</li>
          <li>Email: {props.user.email}</li>
          <li>City: {props.user.city}</li>
          <li>Country: {props.user.country}</li>
        </ul>
        <Registration />
        <Booking />
      </div>
    </>
  );
};

export default UserDetail;
