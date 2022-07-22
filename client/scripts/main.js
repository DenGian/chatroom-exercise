let message;
let username = document.getElementById('username');
document.getElementById('loginButton').addEventListener('click',()=>{
    console.log(username);
    if (username !== ""){
        location.href='view/homePage.html';
        message ='Welcome to the chatroom: ' + username;
        socket.emit('sendToAll', (message))
    } else {
        alert('u nitwit')
    }
})