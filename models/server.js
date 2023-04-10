const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {
    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        // HTTP Server
        this.server = http.createServer( this.app );
        // Configuraciones de Sockets
        this.io = socketio( this.server, { /* configuraciones */ } );
    }
    middlewares(){
        //Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' )));
    }
    configSockets(){
        new Sockets( this.io );
    }
    // Metodo para inicializar
    execute(){
        // Inicializar Middlewares
        this.middlewares();
        // Inicializar Sockets
        this.configSockets();
        // Inicializar el Server
        this.server.listen( this.port, () => {
            console.log('Server corriendo en el puerto:', this.port );
        })
    }
}

module.exports = Server;