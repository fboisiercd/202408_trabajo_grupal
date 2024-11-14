import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {usuario} = useContext(UsuarioContext)
    
    return (
        <>  { usuario ? children : <Navigate to="/login" replace /> } </>
    )
}

PrivateRoutes.propTypes = {
    children: PropTypes.node
}

export default PrivateRoutes