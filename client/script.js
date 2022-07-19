// variables
let socket = io.connect(); //to define your socket

// call to display message
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});

// send to all functionality
document.getElementById('all').addEventListener('click' , clickAll)
function clickAll(){
    let message= document.getElementById('message').value;
    socket.emit('sendToAll', (message));
}

// send to self functionality
document.getElementById('lonely').addEventListener('click', clickEcho)
function clickEcho(){
    let message= document.getElementById('message').value;
    socket.emit('sendToSelf', (message));
}
