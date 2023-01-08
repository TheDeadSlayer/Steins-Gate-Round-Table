import React from "react";
export const AuthenticatedUser = React.createContext();
export const AuthenticatedUserProvider = (props) => {
  const [user, setUser] = React.useState({
    uid: 123,
    name: "Guest",
    loggedIn: false,
  });
  const [isAuthenticated, setIsAuthenticated] = React.useState(false); 
  
  const logOutUser = async () => {
    try {
    localStorage.clear()
      setUser({
        uid: 123,
        name: "Guest",
        loggedIn: false,
      });
    } catch (err) {
      console.log(`something happened when logging user out`, err);
    }
  };
  React.useEffect(() => {
    const savedUser = localStorage.getItem("savedUser")
    if (savedUser) {
        setUser(JSON.parse(savedUser))
    }
  }, []);

  React.useEffect(() => {
    if (user.loggedIn) {
      //* Save user in localStorage
        localStorage.setItem("savedUser",JSON.stringify(user))
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false); 
    }
  }, [user]);

  return (
    <AuthenticatedUser.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated, logOutUser }}
    >
      {props.children}
    </AuthenticatedUser.Provider>
  );
};