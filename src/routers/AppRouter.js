import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "../components/layouts/Layout";
import roles from "../helpers/roles";
import routes from "../helpers/routes";

import AccountPage from "../pages/AccountPage";
import UsersPage from "../pages/admin/UsersPage";
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage";
import NotFounfdPage from "../pages/NotFounfdPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
    return (
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<PublicRoute />}>
              <Route exact path={routes.home} element={<HomePage />} />
            </Route>
            {/* Rutas publicas */}
            <Route exact path="/" element={<PublicRoute />}>
              <Route exact path={routes.login} element={<LoginPage />} />
            </Route>
            <Route exact path="/" element={<PublicRoute />}>
              <Route exact path={routes.registro} element={<RegisterPage />} />
            </Route>
            {/* Fin de rutas publicas*/}

            {/* Rutas privadas */}
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path={routes.perfil} element={<AccountPage />} />
            </Route>

            <Route exact path="/" element={<PrivateRoute />}>
              <Route path={routes.proyectos} element={<ProjectsPage />} />
            </Route>

            <Route exact path={routes.proyecto()} element={<PrivateRoute />}>
              <Route path={routes.proyecto()} element={<ProjectPage />} />
            </Route>

            <Route
              exact
              path="/admin/usuarios"
              element={<PrivateRoute hasRole={roles.admin} />}
            >
              <Route exact path={routes.admin.users} element={<UsersPage />} />
            </Route>
            {/* Fin Rutas privadas */}

            <Route exact path="*" element={<NotFounfdPage />} />
          </Routes>
        </Layout>
      </Router>
    );
}
