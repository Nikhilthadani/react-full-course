import { createContext, useState } from "react";
export const UserContext = createContext({
  user: null,
  fetchUser: async (userId) => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const fetchUser = async (userId) => {
    const baseURL = "https://api.github.com/users";
    const res = await fetch(`${baseURL}/${userId}`);
    const data = await res.json();
    setUser(data);
  };

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
