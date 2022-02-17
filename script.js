let currencyOne = document.querySelectorAll('#currencyOne'); //кнопки 'У меня есть'
let currencyTwo = document.querySelectorAll('#currencyTwo'); //кнопки 'Хочу приобрести'
let inputCurrencyOne = document.querySelector('#number__class__one'); // инпут 'У меня есть'  
let inputCurrencyTwo = document.querySelector('#number__class__two'); // инпут 'Хочу приобрести'
let parCorOne = document.querySelector('#currency__coursOne');// элемент, который находится ниже инпута 'У меня есть'
let parCorTwo = document.querySelector('#currency__coursTwo');// элемент, который находится ниже инпута 'Хочу приобрести'

let one = 'RUB';
let two = 'USD';
const ACTIVE_CURRENCY_COLOR = '#C6C6C6';
let sum = inputCurrencyOne.value = 1;
let sumTwo = inputCurrencyTwo.value;
let flag = true;

currencyOne.forEach((currencyOne) => {  
    if(currencyOne.innerText == one) {     
        currencyOne.style.background = '#833AE0';
        currencyOne.style.color = 'white'; 
    }
    currencyOne.addEventListener('click', clickButtonCurrencyOne);
});

currencyTwo.forEach((currencyTwo) => {  
    if(currencyTwo.innerText == two) {
        currencyTwo.style.background = '#833AE0';
        currencyTwo.style.color = 'white'; 
    }
    currencyTwo.addEventListener('click', clickButtonCurrencyTwo);
});
   
function clickButtonCurrencyOne(event) {
    currencyOne.forEach((currencyOne) => {  
        if(currencyOne.style.background !== '') {
            currencyOne.style.background = '';
            currencyOne.style.color = ACTIVE_CURRENCY_COLOR;
        }
    });
    event.target.style.background = '#833AE0';
    event.target.style.color = 'white';
    one = event.target.innerText;
    result();
}

function clickButtonCurrencyTwo(event) {
    currencyTwo.forEach((currencyTwo) => {  
        if(currencyTwo.style.background !== '') {
            currencyTwo.style.background = '';
            currencyTwo.style.color = ACTIVE_CURRENCY_COLOR;  
        }
    });
    event.target.style.background = '#833AE0';
    event.target.style.color = 'white';
    two = event.target.innerText;
    result();
}

function result () {
    sum = inputCurrencyOne.value;
    sumTwo = inputCurrencyTwo.value;
    converter();
}

function converter() { //работа конвертера
    let urlTwo = `https://api.exchangerate.host/convert?from=${one}&to=${two}&amount=1`;// постоянная конвертация 1 единицы
    fetch(urlTwo)
    .then(res => res.json())
    .then(data => {
        parCorOne.innerText = `1 ${one} = ${data.result.toFixed(4)} ${two}`;
    })   
    let urlThree = `https://api.exchangerate.host/convert?from=${two}&to=${one}&amount=1`;// постоянная конвертация 1 единицы
    fetch(urlThree)
    .then(res => res.json())
    .then(data => {
        parCorTwo.innerText = `1 ${two} = ${data.result.toFixed(4)} ${one}`;
    })   
    if(flag == true && one == two) { //если валюты одинаковые, то выводится число, а конвертация не происходит
        inputCurrencyTwo.value = inputCurrencyOne.value;
        return;
    }
    if(flag == false && two == one) { //если валюты одинаковые, то выводится число, а конвертация не происходит
        inputCurrencyOne.value = inputCurrencyTwo.value;
        return;
    }
    if(flag == true) {
        let url = `https://api.exchangerate.host/convert?from=${one}&to=${two}&amount=${sum}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
        inputCurrencyTwo.value = data.result.toFixed(4);
        })
        .catch((err) => {
            alert('Что-то пошло не так!');
   })
    } if(flag == false) {
        let url = `https://api.exchangerate.host/convert?from=${two}&to=${one}&amount=${sumTwo}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
         inputCurrencyOne.value = data.result.toFixed(4);
        })
        .catch((err) => {
            alert('Что-то пошло не так!');
        })
    }
}
converter();

// работа обратного порядка
inputCurrencyOne.addEventListener('click', rev); 
inputCurrencyTwo.addEventListener('click', revTwo);

function rev() { // функция для работоспособности в обратном порядке
    flag = true;
};

function revTwo() { // функция для работоспособности в обратном порядке
    flag = false;
};

