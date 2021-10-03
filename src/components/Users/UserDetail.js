import React, { useState } from "react";
import { Link } from "react-router-dom";
import Booking from "../Booking";
import Registration from "../Registration";

const UserDetail = (props) => {
  return (
    <>
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
            <li>
              About: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Ad dolor maxime quas praesentium, impedit hic reprehenderit
              quibusdam voluptatum dicta eaque, exercitationem ipsam. Nobis
              beatae nisi officiis? Quisquam pariatur ratione enim.
            </li>
            <li>Gender: {props.user.gender}</li>
            <li>Email: {props.user.email}</li>
            <li>City: {props.user.city}</li>
            <li>Country: {props.user.country}</li>
          </ul>
        </section>
      </div>
      <div>
        <Registration />
        <Booking />
      </div>
    </>
  );
};

export default UserDetail;
