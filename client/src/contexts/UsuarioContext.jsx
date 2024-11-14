import PropTypes from 'prop-types'

import { createContext, useState } from "react";

const UsuarioContext = createContext();

const UsuarioContextComponent = ({children}) => {

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')))

    const datosContexto={
        usuario,
        setUsuario,
    }

    return (
        <UsuarioContext.Provider value={datosContexto}>
            {children}
        </UsuarioContext.Provider>
    )
}

UsuarioContextComponent.propTypes = {
    children: PropTypes.node
}

export {
    UsuarioContextComponent,
    UsuarioContext   
};