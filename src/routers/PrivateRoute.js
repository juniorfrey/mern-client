import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import routes from "../helpers/routes";

//const user = null;
//const user = { id: 1 };
const PrivateRoute = ({ hasRole: role, ...rest }) => {
  const {hasRole, isLogged, user} = useAuth();
 
  if (role && !hasRole(role)) return <Navigate to={routes.home} />;

  //if(isLogged()) return <Navigate to={"/login"} />;

  
  
  return isLogged() ? (<Outlet />) : (<Navigate to={routes.login} />);
};

export default PrivateRoute;
