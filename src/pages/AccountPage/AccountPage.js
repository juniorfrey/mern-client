import { Container, Row, Col, Button, Card } from "react-bootstrap";
import useAuth from "../../Auth/useAuth";
import DeleteModal from "./components/DeleteModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import useModal from '../../hooks/useModal';
export default function AccountPage() {
  const { user } = useAuth();

  const [isOpemDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
  const [isOpemChangePasswordModal, openChangePasswordModal, closeChangePasswordModal] = useModal();

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col xs={{ span: 12 }} className="text-center">
            <img
              src="/img/male_avatar.svg"
              alt="Mi perfil"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col className="mt-4">
            <Card className="p-4 mx-auto" style={{ maxWidth: "360px" }}>
              <p className="text-center">
                <b>Nombre: </b> {user.name}{" "}
              </p>
              <p className="text-center">
                <b>Nombre: </b> {user.email}{" "}
              </p>
              <p className="text-center">
                <b>Nombre: </b> {user.role}{" "}
              </p>
              <Button variant="success">Editar cuenta</Button>

              <Button
                variant="link"
                className="mt-1"
                onClick={openChangePasswordModal}
              >
                Cambiar contraseña
              </Button>

              <Button
                variant="link"
                className="mt-3  text-danger "
                onClick={openDeleteModal}
              >
                Eliminar cuenta
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>

      <DeleteModal isOpen={isOpemDeleteModal} close={closeDeleteModal} />

      <ChangePasswordModal
        isOpen={isOpemChangePasswordModal}
        close={closeChangePasswordModal}
      />
    </>
  );
}
