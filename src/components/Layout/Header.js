import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "../../stylesheets/layout/header.scss";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <header className="header">
          <img
            className="header__img"
            src={logo}
            title="Go to home"
            alt="Find a Surgon"
          />
          <h1 className="header__title">Find a Surgeon</h1>
        </header>
      </Link>
    </div>
  );
}
