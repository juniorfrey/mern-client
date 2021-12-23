import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const users = {
        id:1, role:'regular'
    }
    const [user, setUser] = useState(users);

    const contextValue = {
      user,
      /*login() {
        setUser({ id: 1, username: "fredy" });
      },
      logout() {
        setUser(null);
      },
      isLogged() {
        return !!user;
      },*/
    };

     return (
       <AuthContext.Provider value={contextValue}>
         {children}
       </AuthContext.Provider>
     );
}

export default AuthProvider;