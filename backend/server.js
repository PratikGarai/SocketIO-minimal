const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/fe.html');
})

// console.log(io);
io.on('connection', socket => {
    console.log("New connection made");
    socket.on('disconnect', ()=> {
        console.log('Disconnected');
    });

    socket.on('message', (msg)=>{
        console.log(msg);

        socket.emit('message', msg);
    })
});

server.listen(PORT, ()=> {
    console.log("Listening on port ", PORT)
});