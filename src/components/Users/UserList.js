import React from "react";
import User from "./User";
import "../../stylesheets/users/userList.scss";

const UserList = ({ users }) => {
  const userElements = users.map((user) => {
    return (
      <li key={user.id}>
        <User user={user} />
      </li>
    );
  });

  return (
    <section>
      <ul className="cards">{userElements}</ul>
    </section>
  );
};

export default UserList;
