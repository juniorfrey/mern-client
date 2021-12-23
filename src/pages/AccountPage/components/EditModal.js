import { useEffect } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import roles from '../../../helpers/roles';
import EditAccountResolver from '../../../validations/EditAccountResolver';



export default function EditModal({ isOpen, close, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: EditAccountResolver });

  const onSubmit = (formData) => {
    alert(formData.password);
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen]);

  useEffect(() => {
   if(user) reset({
      nombre: user.name,
      email: user.email,
      rol: user.role,
    });
  }, [])

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe un nombre"
              {...register("nombre")}
            ></Form.Control>
            {errors?.nombre && (
              <Form.Text>
                <Alert variant="danger">{errors.nombre.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escribe un correo electrónico"
              {...register("email")}
            ></Form.Control>
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">{errors.email.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Rol</Form.Label>
            <Form.Control as="select" {...register("rol")}>

              {Object.keys(roles).map(role => (
                <option key={role}>{role}</option>
              ))}
              <option>noexiste</option>
            </Form.Control>
            {errors?.rol && (
              <Form.Text>
                <Alert variant="danger">{errors.rol.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>

        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Actualizar cuenta
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
