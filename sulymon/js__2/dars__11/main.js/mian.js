let elH3 = document.querySelector('.h3')
let elH2 = document.querySelector('.h2')
let elH1 = document.querySelector('.h1')


let count1 = 0
setInterval(()=>{
    count1 ++
    elH1.textContent = count1
    if (count1 == 60) {
        count1 = 0
    }
},1000)

let count2 = 0
setInterval(()=>{
    count2 ++
    elH2.textContent = count2
    if (count2 == 60) {
        count2 = 0
    }
},60000)


let count3 = 0
setInterval(()=>{
    count3 ++
    elH3.textContent = count3
    if (count3 == 24) {
        count3 = 0
    }
},600000)