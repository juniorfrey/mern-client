import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../helpers/routes";
export default function HomePage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: 12 }} md={{ span: 6 }} className="mb-5">
          <h2>Bienvenid@ a gestor de tareas</h2>
          <p>¡Aqui podras gestionar tus proyectos !</p>
          <p>Marca tus tareas como terminadas, Agrega, elimina o actualza.</p>
          <div>
            <Link to={routes.login}> Ingresa </Link> o
            <Button as={Link} to={routes.registro} className="ms-3">
              crea una cuenta
            </Button>
          </div>
        </Col>
        <Col>
          <img
            src="/img/task-manager.svg"
            alt="gestor de tarea"
            className="img-fluid"
          />
          <p>Gestiona tu tiempo, mejora tu proactividad</p>
        </Col>
      </Row>
    </Container>
  );
}
