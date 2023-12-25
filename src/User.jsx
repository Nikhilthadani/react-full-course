import React from "react";
import "./User.css";
const User = ({ login, avatar_url }) => {
  return (
    <div className="container">
      <img src={avatar_url} alt={login} />
      <p>{login}</p>
    </div>
  );
};

export default User;
