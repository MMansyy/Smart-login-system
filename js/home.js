let userName = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).name : 'USER';
let logBtn = document.querySelector('#logBtn');

document.querySelector('#name').innerHTML = 'Welcome ' + userName.charAt(0).toUpperCase() + userName.slice(1);


logBtn.addEventListener('click', function () {
    sessionStorage.clear();
    window.location.asssign('./index.html');
})
