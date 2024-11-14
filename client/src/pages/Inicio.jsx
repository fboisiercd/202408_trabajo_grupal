import { useContext } from "react"
import { UsuarioContext } from "../contexts/UsuarioContext"

const Inicio = () => {

    const {usuario} = useContext(UsuarioContext)


    return (
        <div className="container mt-5">
            <div className="alert alert-info">
                <h2>Bienvenido a Examen {usuario.nombre}</h2>
            </div>
        </div>
    )
}

export default Inicio