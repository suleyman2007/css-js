let elForm = document.querySelector('#form') 
let elInput = document.querySelector('.input') 
let elButton1 = document.querySelector('.button1') 
let elBtn1 = document.querySelector('.btn1')
let elBtn2 = document.querySelector('.btn2') 
let elBtn3 = document.querySelector('.btn3') 
let elP = document.querySelector('.p')



elButton1.addEventListener('click', ()=>{
    if (elInput.value == 1) {
      elP.textContent = positive
      elBtn1.style = 'color: black;'
      elBtn2.style = 'color: silver;'
      elBtn3.style = 'color: silver;'
    }else if(elInput.value == 2) {
      elP.textContent = negative
      elBtn1.style = 'color: silver;'
      elBtn2.style = 'color: silver;'
      elBtn3.style = 'color: black;'
    }else if (elInput.value == 3) {
      elP.textContent = neuatral
      elBtn1.style = 'color: silver;'
      elBtn2.style = 'color: black;'
      elBtn3.style = 'color: silver;'
    }else{
      alert('NULL , raqam yozing , написать номер , write a number ')
    }
})


let positive = 'positive'
let negative = 'negative'
let neuatral = 'neuatral'

elBtn1.addEventListener('click', (e)=>{
  elP.textContent = positive
  elBtn1.style = 'color: black;'
  elBtn2.style = 'color: silver;'
  elBtn3.style = 'color: silver;'
})

elBtn2.addEventListener('click', (e)=>{
  elP.textContent = negative
  elBtn1.style = 'color: silver;'
  elBtn2.style = 'color: black;'
  elBtn3.style = 'color: silver;'
})

elBtn3.addEventListener('click', (e)=>{
  elP.textContent = neuatral
  elBtn1.style = 'color: silver;'
  elBtn2.style = 'color: silver;'
  elBtn3.style = 'color: black;'
})

// elButton1.focus()