import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/users/userDetail.scss";
import AppointmentPick from "../Booking/AppointmentPick";
import PropTypes from "prop-types";

const UserDetail = ({ user }) => {
  return (
    <div className="userId">
      <article className="userId__card">
        <img className="userId__image" src={user.image} alt={user.name} />
        <div className="userId__details">
          <h4 className="userId__name"> {user.name}</h4>
          <ul>
            <li className="userId__list">
              About: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit ullam architecto cumque voluptatem, corporis dolorem
              eligendi, dolorum vitae consequatur rem cum consectetur,
              asperiores expedita ut ab fuga placeat quae aspernatur.
            </li>
            <li className="userId__list">Contry: {user.country}</li>
            <li className="userId__list">City: {user.city}</li>
            <li className="userId__list">Email: {user.email}</li>
          </ul>
        </div>
      </article>
      <Link className="userId__link" to="/">
        <span className="home_icon">👈🏻</span>
      </Link>
      <AppointmentPick />
    </div>
  );
};

UserDetail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
  email: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
};

export default UserDetail;
