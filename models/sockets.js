
class Sockets {
    constructor( io ){
        this.io = io;
        this.socketsEvents();
    }
    socketsEvents(){
        // ON connection
        this.io.on('connection', ( socket ) =>{
            // Event EmitWelcome: msg-welcome
            socket.emit('msg-welcome', {
                msg: 'Bienvenido al server Gdev',
                date: new Date(),
                PORT: process.env.PORT
            });
            // Event ListenMessage: msg-client to msg-to-clients
            socket.on('msg-client', ( data ) => {
                console.log(data);
                this.io.emit('msg-to-clients', data );
            })
        })
    }
}

module.exports = Sockets;