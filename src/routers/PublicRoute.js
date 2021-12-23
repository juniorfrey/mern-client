import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Auth/useAuth";

//const user = null;
//const user = { id: 1 };
const PublicRoute = ({ element: Element, ...rest }) => {
  const auth = useAuth();

  return !auth.user ? <Outlet /> : <Navigate to={"/proyectos"} />;
  //return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PublicRoute;