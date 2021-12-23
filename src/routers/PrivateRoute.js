import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Auth/useAuth";

//const user = null;
//const user = { id: 1 };
const PrivateRoute = ({ hasRole: role, ...rest }) => {
  const auth = useAuth();
 
  if(role && auth.user?.role !== role) return <Navigate to={"/"} />;

  return auth.user ? <Outlet /> : <Navigate to={"/login"} />;
  //return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
