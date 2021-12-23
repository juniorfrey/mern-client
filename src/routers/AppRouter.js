import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "../components/layouts/Layout";

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
              <Route exact path="/" element={<HomePage />} />
            </Route>
            {/* Rutas publicas */}
            <Route exact path="/" element={<PublicRoute />}>
              <Route exact path="/login" element={<LoginPage />} />
            </Route>
            <Route exact path="/" element={<PublicRoute />}>
              <Route exact path="/registro" element={<RegisterPage />} />
            </Route>
            {/* Fin de rutas publicas*/}

            {/* Rutas privadas */}
            <Route exact path="/perfil" element={<PrivateRoute />}>
              <Route path="/perfil" element={<AccountPage />} />
            </Route>

            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/proyectos" element={<ProjectsPage />} />
            </Route>

            <Route
              exact
              path="/prpyecto/:proyectoId"
              element={<PrivateRoute />}
            >
              <Route path="/prpyecto/:proyectoId" element={<ProjectPage />} />
            </Route>

            <Route exact path="/admin/usuarios" element={<PrivateRoute />}>
              <Route exact path="/admin/usuarios" element={<UsersPage />} />
            </Route>
            {/* Fin Rutas privadas */}

            <Route exact path="*" element={<NotFounfdPage />} />
          </Routes>
        </Layout>
      </Router>
    );
}
