import React from "react";
import { Navigate, Outlet } from "react-router-dom";
//import useAuth from "../Auth/useAuth";

const user = {id:1};
const PrivateRoute = ({ element: Element, ...rest }) => {
  //const auth = useAuth();

  //return auth.isLogged() ? <Outlet /> : <Navigate to={"/login"} />;
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
