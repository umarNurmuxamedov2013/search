let formUsers = document.querySelector(".formUsers")
let sortedCards = document.querySelector(".sortedCards")
let cards = document.querySelector(".cards")
let cardsWrapper = document.querySelector(".cards .cardsWrapper")
let textes = document.querySelectorAll(".h1")
let textes2 = document.querySelectorAll(".h2")
let usernum = document.getElementById('usernum');
let agenum = document.getElementById('agenum');
let text = document.getElementById('text');
formUsers.addEventListener('submit', function (event) {

    event.preventDefault()
    firstName = 'a';
    lastName = 'a';
    fetch(`https://randomuser.me/api/?results=${usernum.value}`)
    .then(response => response.json())
    .then(data => {
        if (usernum.value === '' || agenum.value === '') {
            alert("Enter a number in the search box")
        } else {
        data.results.map(user => {
            let firstName = user.name.first
            let lastName = user.name.last
            let ism = document.createElement('p')
            ism.innerHTML = firstName + '.'
            text.appendChild(ism)

            let age = user.registered.age
            if(age > agenum.value){
               let ages = document.createElement('p');
               ages.innerHTML = age;
               document.getElementById('sara').appendChild(ages)
            }
        })
        }
    })
})
let card = document.createElement("div")
card.classList.add("card")