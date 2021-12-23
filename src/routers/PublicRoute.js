import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Auth/useAuth";
import routes from "../helpers/routes";

//const user = null;
//const user = { id: 1 };
const PublicRoute = ({ element: Element, ...rest }) => {
  const { isLogged } = useAuth();

  //if (!isLogged()) return <Navigate to={"/proyectos"} />;
  //return !auth.user ? <Outlet /> :
  
  return !isLogged() ? <Outlet /> : <Navigate to={routes.proyectos} />;
};

export default PublicRoute;
