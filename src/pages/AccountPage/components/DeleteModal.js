import { Modal, Alert, Button } from 'react-bootstrap'
import useAuth from '../../../Auth/useAuth';
export default function DeleteModal({isOpen, close}) {


    const { logout } = useAuth();

    const handleDelete = () => {
        // Petición HTTP
        // close
        logout();
    }
    
    return (
      <Modal show={isOpen} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            ¿Estas seguro que deseas eliminar permanente tu cuenta ?{" "}
            <b>Se perderan tus datos</b>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar cuenta
          </Button>
        </Modal.Footer>
      </Modal>
    );
}
