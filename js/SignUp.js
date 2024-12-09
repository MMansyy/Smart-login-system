

let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userPassword = document.querySelector('#userPassword');
let signUpBtn = document.querySelector('#signUpBtn');
let users = [];
let regex = {
    userEmail: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    userName: /^[a-zA-Z]{3,}$/,
    userPassword: /^[a-zA-Z0-9]{6,}$/
}

if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
}

function signUp() {
    let user = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === user.email) {
            alert('User already exists');
            return;
        }
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
    alert('User registered successfully');
    window.location.assign('./index.html');
}

function validateSignUp(ele) {
    if (regex[ele.id].test(ele.value)) {
        ele.classList.remove('is-invalid');
        ele.classList.add('is-valid');
        ele.nextElementSibling.classList.add('d-none');
        ele.nextElementSibling.classList.remove('d-block');

        console.log(ele.nextElementSibling);

    } else {
        ele.classList.remove('is-valid');
        ele.classList.add('is-invalid');
        ele.nextElementSibling.classList.add('d-block');
        ele.nextElementSibling.classList.remove('d-none');
        
    }
    toggleButton();
}


signUpBtn.addEventListener("click", signUp);

userName.addEventListener("keyup", function () {
    validateSignUp(this);
});
userEmail.addEventListener("keyup", function () {
    validateSignUp(this);
});
userPassword.addEventListener("keyup", function () {
    validateSignUp(this);
});



function toggleButton() {
    if (userName.classList.contains('is-valid') && userEmail.classList.contains('is-valid') && userPassword.classList.contains('is-valid')) {
        signUpBtn.classList.remove('disabled');
    } else {
        signUpBtn.classList.add('disabled');
    }
}
