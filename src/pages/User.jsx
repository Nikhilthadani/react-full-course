import React from "react";

import "../styles/User.css";
import UserProfile from "../components/user-profile";
import NotFound from "../components/user-profile/notfound/NotFound";
import { useSelector } from "react-redux";
const User = () => {
  const { user, loading } = useSelector((state) => state.githubUser);
  console.log(user, loading);
  return (
    <section className="container">
      {user ? (
        <UserProfile
          avatar_url={user.avatar_url}
          followers={user.followers}
          html_url={user.html_url}
          name={user.name || user.login}
          public_repos={user.public_repos}
          key={user.id}
        />
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default User;
