import { createContext, useEffect, useState } from "react";
import roles from "../helpers/roles";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    /*const users = {
        id:1, role: roles.regular
    }*/
    const users = null;
    const [user, setUser] = useState(users);
    const login = (userCredentials) => setUser({ id: 1, name:"Fredys", email:"juniorfrey2990@gmail.com", role: roles.regular });
    const logout = () => setUser(null);
    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role;

    const contextValue = {
      user,
      isLogged,
      hasRole,
      login,
      logout,
      
    };

     return (
       <AuthContext.Provider value={contextValue}>
         {children}
       </AuthContext.Provider>
     );
}

export default AuthProvider;