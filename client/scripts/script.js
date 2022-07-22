let socket = io.connect(); //to define your socket
socket.on('receiveUserName', (socket.name));
let username = socket.name;
console.log(username);
// let username;
// do {
//     username = window.prompt('Welcome to your MSN account, please log in')
// }
// while (username === '');

// let message;
// let username ;
// // username = document.querySelector('input').value;
// document.getElementById('loginButton').addEventListener('click',(e)=>{
//     username = document.getElementById('username').value;
//     console.log(username);
//     if (username !== ""){
//         e.preventDefault();
//         window.location.href='view/homePage.html';
//         message ='Welcome to the chatroom: ' + username;
//         socket.emit('sendToAll', (message))
//     } else {
//         alert('u nitwit')
//     }
// })

// class
// let user = class {
//     constructor(username, password, avatar) {
//         this.username = username;
//         this.password = password;
//         this.avatar = avatar;
//     }
// };

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

// online users
socket.on('displayUserList', (usernames)=> {
    console.log(usernames);
    if (onlineUserList.innerHTML === '') {
        usernames.forEach(username => {
            onlineUserList.innerHTML += username + '<br>';
        })
    } else {
        onlineUserList.innerHTML += '<br>' + usernames[usernames.length - 1]
    }
});

// send to self functionality
document.getElementById('lonely').addEventListener('click', clickEcho)
function clickEcho(){
    let message= document.getElementById('message').value;
    socket.emit('sendToSelf', (message));
}
