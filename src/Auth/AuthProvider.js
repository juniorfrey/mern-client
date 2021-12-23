import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

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