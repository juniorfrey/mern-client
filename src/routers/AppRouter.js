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

export default function AppRouter() {
    return (
      <Router>
       <Layout>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginPage />} />
                <Route exact path="/registro" element={<RegisterPage />} />
                <Route exact path="/perfil" element={<AccountPage />} />
                <Route exact path="/prpyectos" element={<ProjectsPage />} />
                <Route exact path="/prpyecto/:proyectoId" element={<ProjectPage />} />
                <Route exact path="/admin/usuarios" element={<UsersPage />} />
                <Route exact path="*" element={<NotFounfdPage />} />
            </Routes>
       </Layout>
      </Router>
    );
}
