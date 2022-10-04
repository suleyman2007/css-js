let elWrapper = document.querySelector('.wrapper')
let elForm = document.querySelector('.form')

fetch('https://632eedc8b56bd6ac45a75f1c.mockapi.io/users')
.then((promis)=> promis.json())
.then((data)=> mapper(data))

function mapper(data) {
  console.log(data);
    data.map((e,i)=>{
        let newLi = document.createElement('li')
        newLi.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj-1KIYtvjs4ft-nBOoDvTshg3UtK02xhhA&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">${e.id}</p>
          <a href="#" class="btn btn-primary">${e.name}</a>
          <a href="#" class="btn btn-primary">${e.age}</a>
        </div>
      </div>`
      elWrapper.appendChild(newLi)
    })
}

elForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let name = e.target.elements.name.value
    let age = e.target.elements.age.value

    console.log(name);
    console.log(age);

    fetch('https://632eedc8b56bd6ac45a75f1c.mockapi.io/users',{
      method: 'POST',
      headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({name,age})
    })
    .then((promis)=> promis.json())
    .then((data)=> console.log(data))

    // setTimeout(()=>{
    //   location.reload();
    // },1000)

})