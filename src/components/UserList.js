import React from 'react';
import User from './User';

const UserList = props => {
  const userElements = props.users.map(user => {
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
