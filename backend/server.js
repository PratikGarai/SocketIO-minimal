const express = require('express');
const server = require('http');
const socketio = require('socket.io');

const app = express();
const io = socketio(server.createServer(app));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/fe.html');
})

// console.log(io);
io.on('connection', socket => {
    console.log("New connection made");
    io.on('disconnect', ()=> {
        console.log('Disconnected');
    });
});

app.listen(3000);