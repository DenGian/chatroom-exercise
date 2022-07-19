// variables
let socket = io.connect(); //to define your socket
let message= document.getElementById('message').value;

socket.emit('sendToAll', (message));