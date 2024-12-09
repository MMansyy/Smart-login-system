let userEmail = document.querySelector('#userEmail');
let userPassword = document.querySelector('#userPassword');
let loginBtn = document.querySelector('#loginBtn');

let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];


function login() {
    let user = {
        email: userEmail.value,
        password: userPassword.value
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === user.email && users[i].password === user.password) {
            alert('User logged in successfully');
            sessionStorage.setItem('user', JSON.stringify(users[i]));
            window.location.assign('/home.html');
            return;
        }
    }
    alert('Invalid email or password');
}
loginBtn.addEventListener("click", login);
