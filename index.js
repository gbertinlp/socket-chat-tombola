// // Servidor de Express
// const express = require('express');
// const app = express();
// // Server de Sockets
// const server = require('http').createServer(app);
// // Configuracion de socket server
// const io = require('socket.io')(server);
// // Desplegar el directorio publico
// app.use( express.static( __dirname + '/public') );

const Server = require('./models/server');
require('dotenv').config();
const server = new Server();
server.execute();

// io.on('connection', ( socket ) => { 
//     socket.emit('msg-welcome', {
//         msg: 'Bienvenido al server',
//         date: new Date()
//     });

//     socket.on('msg-client', ( data ) => {
//         console.log( data );
//         io.emit('msg-to-clients', data);
//     })
// });

// server.listen(8080, () => {
//     console.log('Server corriendo en el puerto: 8080');
// }); 