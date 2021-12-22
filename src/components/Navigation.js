import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
        <Navbar.Brand as={NavLink} to="/">
          Gestor de Tareas
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={NavLink} to="/proyectos">
              Proyectos
            </Nav.Link>
            <NavDropdown title="Admin">
              <NavDropdown.Item as={NavLink} to="/admin/usuarios">
                Usuarios
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/login">
              Entrar
            </Nav.Link>
            <Nav.Link as={NavLink} to="/registro">
              Registrarse
            </Nav.Link>
            <Nav.Link as={NavLink} to="/perfil">
              Mi cuenta
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
