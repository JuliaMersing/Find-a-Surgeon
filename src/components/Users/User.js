import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../../stylesheets/users/userCard.scss";

const User = ({ user }) => {
  const getGender = () => {
    if (user.gender === "female") {
      return "Female";
    } else if (user.gender === "male") {
      return "Male";
    } else {
      return "No binario";
    }
  };

  return (
    <div className="container">
      <article className="user">
        <img
          className="user__img"
          src={user.image}
          alt={`Portrait of user`}
          title={`Photo ${user.name}`}
        />
        <h4 className="user__name">{user.name}</h4>
        <p className="user__info">
          {user.city} / {getGender()}
        </p>
        <Link to={`/user/${user.id}`}>
          {" "}
          <button className="user__button">Book a 3D consultation</button>{" "}
        </Link>
      </article>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  gender: PropTypes.string,
};

export default User;
