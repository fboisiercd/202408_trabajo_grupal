import PropTypes from 'prop-types';
import { useContext } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {

    const {usuario} = useContext(UsuarioContext)

    return (
        <>  { usuario ? <Navigate to="/" replace />  : children} </>
    )
}

PublicRoutes.propTypes = {
    children: PropTypes.node
}

export default PublicRoutes