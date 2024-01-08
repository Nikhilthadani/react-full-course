import { createContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  fetchUser: async (userId) => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const BASE_URL = "https://api.github.com/users";

  const fetchUser = async (userId) => {
    if (userId.trim() === "") return;
    try {
      const res = await fetch(`${BASE_URL}/${userId}`);
      const data = await res.json();
      if (data.login) {
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
