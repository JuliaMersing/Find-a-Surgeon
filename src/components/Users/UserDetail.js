import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/users/userDetail.scss";
import AppointmentPick from "../Booking/AppointmentPick";

const UserDetail = (props) => {
  return (
    <div className="userId">
      <article className="userId__card">
        <img
          className="userId__image"
          src={props.user.image}
          alt={props.user.name}
        />
        <div className="userId__details">
          <h4 className="userId__name"> {props.user.name}</h4>
          <ul>
            <li className="userId__list">
              About: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit ullam architecto cumque voluptatem, corporis dolorem
              eligendi, dolorum vitae consequatur rem cum consectetur,
              asperiores expedita ut ab fuga placeat quae aspernatur.
            </li>
            <li className="userId__list">Contry: {props.user.country}</li>
            <li className="userId__list">City: {props.user.city}</li>
            <li className="userId__list">Email: {props.user.email}</li>
          </ul>
        </div>
      </article>
      <AppointmentPick />
      <Link to="/">
        <span className="home_icon">👈🏻</span>
      </Link>
    </div>
  );
};

export default UserDetail;
