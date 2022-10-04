let body = document.querySelector('body')
let elButton = document.querySelector('.button')
let elIsm = document.querySelector('.ism')

elButton.addEventListener('click',()=>{
    alert('Assalamu alaykum')
    let ism = prompt('ismingizni yozing')
    let age = prompt('yoshingizni yozing')
    let uy = prompt('uyingizni yozing')
    alert('xushkelipsiz' + ' ' + ism)


    let newP1 = document.createElement('p')
    newP1.textContent = ism


    let newP2 = document.createElement('p')
    newP2.textContent = age
    body.appendChild(newP2)

    let newP3 = document.createElement('p')
    newP3.textContent = uy
    body.appendChild(newP3)
})