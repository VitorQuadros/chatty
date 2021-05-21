import express, { json } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import './database';
import { routes } from './routes';

const app = express();

const http = createServer(app); // create http protocol
const io = new Server(http); // create ws protocol

io.on('connection', (socket: Socket) => {
  console.log('connected', socket.id);
});

app.use(express.json());
app.use(routes);

http.listen(3333, () => {
  console.log('Running...');
});
