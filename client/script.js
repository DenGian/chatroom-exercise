let socket = io.connect(); //to define your socket
let username;
do {
    username = window.prompt('Welcome to your MSN account, please log in')
}
while (username === '');
let message ='Welcome to the chatroom: ' + username;
socket.emit('sendToAll', (message));

// let username = document.getElementById('username');
//
// if (document.getElementById('loginButton') === ){
//
// }
//
// if (username !== ""){
//     let message ='Welcome to the chatroom: ' + username;
// } else {
//     alert('u')
// }


// class
let user = class {
    constructor(username, password, avatar) {
        this.username = username;
        this.password = password;
        this.avatar = avatar;
    }
};

// call to display message
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});

// send to all functionality
document.getElementById('all').addEventListener('click' , clickAll)
function clickAll(){
    let message= username + ': ' + document.getElementById('message').value;
    socket.emit('sendToAll', (message));
}

// send to self functionality
document.getElementById('lonely').addEventListener('click', clickEcho)
function clickEcho(){
    let message= document.getElementById('message').value;
    socket.emit('sendToSelf', (message));
}
