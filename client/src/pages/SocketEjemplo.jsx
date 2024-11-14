import { useEffect } from "react";
import socket from '../socket';

const SocketEjemplo = () => {

    useEffect(() => {
        socket.on('newMessage', (mensaje) => {
            console.log('Cliente recibe en newMessage:', mensaje);
        });
    }, [])

    const enviarMensaje = () => {
        socket.emit('saludando', 'Hola desde el cliente');
    }

    return (
        <>
            <h1>Socket.io</h1>
            <button onClick={enviarMensaje}>Enviar mensaje</button>
        </>
    )
}

export default SocketEjemplo