import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../api/authServices";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";


const formSchema = Yup.object().shape({
    email: Yup.string()
        .required("Campo Requerido")
        .email("Correo Electrónico Inválido"),
    password: Yup.string(),
});

const initial = {
    email: "",
    password: "",
};


const Login = () => {

    const { setUsuario } = useContext(UsuarioContext)

    const navigate = useNavigate();

    const handleSubmit = (values) => {

        const saveData = async () => {
            try {
                const data = await login(values)
                console.log(data)
                setUsuario(data.datosToken)
                localStorage.setItem('usuario', JSON.stringify(data.datosToken))
                navigate('/')
            } catch (error) {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal...',
                    text: error?.response?.data?.message,
                })
            }
        }
        saveData();
    }


    return (
        <>
            <Formik
                initialValues={initial}
                validationSchema={formSchema}
                onSubmit={handleSubmit}
            >
                {({ isValid, dirty }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico:</label>
                            <Field
                                className="form-control"
                                name="email"
                                type="email"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="field-error text-danger"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña:</label>
                            <Field
                                className="form-control"
                                name="password"
                                type="password"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="field-error text-danger"
                            />
                        </div>

                        <button
                            className="btn btn-primary btn-block mt-2"
                            type="submit"
                            disabled={!(isValid && dirty)}
                        >
                            Entrar al sistema
                        </button>
                    </Form>
                )}
            </Formik>
            <Link to="/registro" className="btn btn-info">Registrarse</Link>
        </>
    );
};

export default Login;