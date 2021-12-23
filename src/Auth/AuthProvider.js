import { createContext, useEffect, useState } from "react";
import roles from "../helpers/roles";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    /*const users = {
        id:1, role: roles.regular
    }*/
    const users = null;
    const [user, setUser] = useState(users);
    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
      user,
      isLogged,
      hasRole
      /*login() {
        setUser({ id: 1, username: "fredy" });
      },
      logout() {
        setUser(null);
      },
      */
    };

     return (
       <AuthContext.Provider value={contextValue}>
         {children}
       </AuthContext.Provider>
     );
}

export default AuthProvider;