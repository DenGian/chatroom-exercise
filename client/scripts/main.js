// let message;
let username ;
// username = document.querySelector('input').value;
document.getElementById('loginButton').addEventListener('click',(e)=>{
    username = document.getElementById('username').value;
    console.log(username);
    if (username !== ""){
        e.preventDefault();
        socket.emit('getUserName', (username))
        window.location.href='../view/homePage.html';
        // message ='Welcome to the chatroom: ' + username;
        // socket.emit('sendToAll', (message))
    } else {
        alert('u nitwit')
    }
})