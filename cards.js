let getCardHolder = document.querySelector('#cardHolder');
let getText = document.querySelector('#text');
let getCreate = document.querySelector('#create');


getCreate.addEventListener('click', function inputString() {
    let newCard = '';
    newCard += `<div class="cardBorder"><h3>${getText.value}</h3><button class="delete">Delete</button></div>`
    getCardHolder.innerHTML += newCard;
})

let deleteButton = (deleteCard) => {
    if (deleteCard.target.className === 'delete') {
        deleteCard.target.parentElement.remove();
    }
}

document.body.addEventListener('click', deleteButton)