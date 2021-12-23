import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import roles from '../helpers/roles';


const schema = yup.object().shape({
    nombre: yup
            .string("La nombre debe ser un texto")
            .required("Debes ingresar nombre un valido"),
    email:yup
            .string("El correo debe ser texto")
            .email("Debe ingresar un email valido")
            .required("Debes ingresar email un valido"),
    rol:yup
        .string("El rol debe ser un texto")
        .oneOf([roles.regular, roles.admin], "El rol no es valido, elija otro")
        .required("Debes ingresar rol un valido"),
});

export default yupResolver(schema);
