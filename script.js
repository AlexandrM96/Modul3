let currencyOne = document.querySelectorAll('#currencyOne'); //кнопки 'У меня есть'
let currencyTwo = document.querySelectorAll('#currencyTwo'); //кнопки 'Хочу приобрести'
let inputCurrencyOne = document.querySelector('#number__class__one'); // инпут 'У меня есть'  
let inputCurrencyTwo = document.querySelector('#number__class__two'); // инпут 'Хочу приобрести'

let one = 'RUB';
let two = 'USD';
let sum = inputCurrencyOne.value = 1;

currencyOne.forEach((currencyOne) => {  
    if(currencyOne.innerText == one) {     
        currencyOne.style.background = '#833AE0';
        currencyOne.style.color = 'white' 
    }
    currencyOne.addEventListener('click', clickButtonCurrencyOne);
});

currencyTwo.forEach((currencyTwo) => {  
    if(currencyTwo.innerText == two) {
        currencyTwo.style.background = '#833AE0';
        currencyTwo.style.color = 'white' 
    }
    currencyTwo.addEventListener('click', clickButtonCurrencyTwo);
});
   
function clickButtonCurrencyOne(event) {
    currencyOne.forEach((currencyOne) => {  
        if(currencyOne.style.background != '') {
            currencyOne.style.background = '';
            currencyOne.style.color = '#C6C6C6';
        }
    });
    event.target.style.background = '#833AE0';
    event.target.style.color = 'white';
    one = event.target.innerText;
    result();
}

function clickButtonCurrencyTwo(event) {
    currencyTwo.forEach((currencyTwo) => {  
        if(currencyTwo.style.background != '') {
            currencyTwo.style.background = '';
            currencyTwo.style.color = '#C6C6C6';  
        }
    });
    event.target.style.background = '#833AE0';
    event.target.style.color = 'white';
    two = event.target.innerText;
    result();
}

function result () {
    sum = inputCurrencyOne.value;
    converter();
}

function converter() {
    let url = `https://api.exchangerate.host/convert?from=${one}&to=${two}&amount=${sum}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
     inputCurrencyTwo.value = data.result;
    })        
}
converter();