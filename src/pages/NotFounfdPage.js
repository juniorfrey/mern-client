import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes  from '../helpers/routes';
export default function NotFounfdPage() {

    return (
      <Container>
        <Row>
          <Col  md={{ span: 6, offset: 3 }} className='text-center mt-5'>
                <img
                style={{ width: "100%" }}
                src="/img/404-not-found.svg"
                alt="error-404"
                />
                <h2>¿Te has perdido ?</h2>
                <p>
                    Vuelve al <Link to={routes.home}>Inicio</Link>
                </p>
          </Col>
        </Row>
      </Container>
    );
}
