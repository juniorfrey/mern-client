import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import routes from '../helpers/routes';

export default function Navigation() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Navbar.Brand as={NavLink} to={routes.home}>
          Gestor de Tareas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to={routes.proyectos}>
              Proyectos
            </Nav.Link>
            <NavDropdown title="Admin">
              <NavDropdown.Item as={NavLink} to={routes.admin.users}>
                Usuarios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to={routes.login}>
              Entrar
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.registro}>
              Registrarse
            </Nav.Link>
            <Nav.Link as={NavLink} to={routes.perfil}>
              Mi cuenta
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
