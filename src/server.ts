import express, { json } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import './database';
import { routes } from './routes';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

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
