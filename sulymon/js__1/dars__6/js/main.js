let elFrom = document.getElementById('form')
let elname = document.querySelector('.name')
let elEmail = document.querySelector('.email')
let elPassword = document.querySelector('.password')

elFrom.addEventListener('submit', function(){
    console.log(elname.value);
    console.log(elEmail.value);
    console.log(elname.value);
    if (elEmail.value.indexOf('@') != -1) {
        elEmail.classList.add('success')
        elEmail.classList.remove('error')
    }else{
        elEmail.classList.remove('success')
        elEmail.classList.add('error')
    }
    if (elPassword.value.length >= 4) {
        elPassword.classList.add('success')
        elPassword.classList.remove('error')
    }else{
        elPassword.classList.remove('success')
        elPassword.classList.add('error')
    }
})