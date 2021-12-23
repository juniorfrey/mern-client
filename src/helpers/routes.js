const routes = {
  home: "/",
  login: "/login",
  registro: "/registro",
  perfil: "/perfil",
  proyectos: "/proyectos",
  proyecto: (proyectoId) => proyectoId ? `/proyectos/:${proyectoId}`: `proyectos/:proyectoId`,
  admin: {
      users: '/admin/usuarios'
  }
};
export default routes;