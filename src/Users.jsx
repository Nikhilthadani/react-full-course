import React, { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .then(() => setLoading(false))
      .catch((err) => console.log("Error received", err));
  }, []);
  return (
    <section>
      {loading && <div>Loading...</div>}
      <div style={{ display: "flex", width: "100%", flexWrap: "wrap", gap: 4 }}>
        {users.map((user) => (
          <User avatar_url={user.avatar_url} login={user.login} key={user.id} />
        ))}
      </div>
    </section>
  );
};

export default Users;
