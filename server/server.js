const express = require('express');
const http = require('http');

const app = express(); //To define our application
const clientPath = `${__dirname}/../client`; //To give the path to our client
app.use(express.static(clientPath)); //To use express to host the client
const server = http.createServer(app); //To use http to serve the app that express provides

server.listen(8080, () =>{
    console.log("server running on "+8080); // node server -> logs "server running on " in terminal
});

const io = require('socket.io')(server); //to require socket.io
//The io variable is now the entry point of all the sockets connected to the server

let counter = 0
let usernames = []

io.on('connection', (socket) => {
    console.log(counter+' someone connected');
    counter++;
    socket.on('sendToAll', (message) =>{
        io.emit("displayMessage", (message)); // obj username property+message property data.username and data.message
    });
    socket.on('sendToSelf', (message) =>{
        socket.emit("displayMessage", (message));
    });
    socket.on('getUserName', (username)=>{
        socket.name = username;
        socket.emit('receiveUserName', (socket.name))
    });
    socket.on('sendToUserList', (username)=>{
        // console.log(username);
        // socket.name = username;
        // console.log(socket.name);
        usernames.push(username)
        // console.log(usernames);
        io.emit('displayUserList', (usernames));
    })
});
