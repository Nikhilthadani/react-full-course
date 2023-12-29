import { useAuth } from "./context";

const UsingContext = () => {
  const { userId, isLoggedIn, login, logout } = useAuth();
  const handleLogin = () => {
    login("thadani");
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <div>
      <div>
        {isLoggedIn ? (
          <div>
            <h1>Hi, {userId} Welcome!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsingContext;
