// variables
let socket = io.connect(); //to define your socket

document.getElementById('all').addEventListener('click' , clickAll)
function clickAll(){
    let message= document.getElementById('message').value;
    socket.emit('sendToAll', (message));
}
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});
