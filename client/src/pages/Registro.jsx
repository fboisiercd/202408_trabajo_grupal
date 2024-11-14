import { Link, useNavigate } from "react-router-dom"
import FormularioUsuarios from "../components/FormularioUsuarios"
import { registrarUsuario } from "../api/authServices"
import Swal from "sweetalert2"
import { useContext } from "react"
import { UsuarioContext } from "../contexts/UsuarioContext"

const Registro = () => {
    const { setUsuario } = useContext(UsuarioContext)

    const navigate = useNavigate();

    const initialValues = {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        password: "",
    }

    const handleCrearUsuario = (values) => {
        const saveData = async () => {
            try {
                const datos = await registrarUsuario(values)
                console.log(datos)
                const dataToken = {
                    apellido: datos.apellido,
                    email: datos.email,
                    id: datos._id,
                    nombre: datos.nombre,
                    tipo: datos.tipo_usuario
                }

                setUsuario(dataToken)
                localStorage.setItem('usuario', JSON.stringify(dataToken))
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
            <h2>Crear Usuario</h2>
            <hr />
            <FormularioUsuarios editando={false} initial={initialValues} handleSubmit={handleCrearUsuario} />
            <Link to="/login" className="btn btn-info">Al login</Link>
        </>

    )
}

export default Registro