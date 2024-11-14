// Importamos el módulo express
import express from 'express';
import { config } from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import { conectarDB } from './config/mongoose.config.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routerAuth from './src/routes/auth.routes.js';
import { Server } from 'socket.io';
import http from 'http';

config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado', socket.id);

    // Se escucha el evento newMessage para recibir mensajes del cliente
    // y se reenvían a todos los clientes conectados usando io.emit.
    socket.on('saludando', (message) => {
        console.log('Mensaje recibido en saludando:', message);
        io.emit('newMessage', message);
    });

    // Desconexión:
    // Cuando un usuario se desconecta, se imprime un mensaje en la consola.
    socket.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
});
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(cookieParser());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());

const port = process.env.PORT || 8000;

app.use('/api/auth', routerAuth);

conectarDB();

server.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});