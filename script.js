let currencyOne = document.querySelectorAll('#currencyOne'); //кнопки 'У меня есть'
let currencyTwo = document.querySelectorAll('#currencyTwo'); //кнопки 'Хочу приобрести'
let inputCurrencyOne = document.querySelector('#number__class__one'); // инпут 'У меня есть'  
let inputCurrencyTwo = document.querySelector('#number__class__two'); // инпут 'Хочу приобрести'

let url = 'https://api.exchangerate.host/convert?from=USD&to=EUR';

currencyOne.forEach((currencyOne) => {  
    currencyOne.addEventListener('click', clickButtonCurrencyOne);
});

currencyTwo.forEach((currencyTwo) => {  
    currencyTwo.addEventListener('click', clickButtonCurrencyTwo);
});
   
function clickButtonCurrencyOne(event) {
    let resultClick = event.target.innerText;
    inputCurrencyTwo.value = inputCurrencyOne.value;
    console.log(resultClick);
    return resultClick;
}

function clickButtonCurrencyTwo(event) {
    let resultClickTwo = event.target.innerText;
    console.log(resultClickTwo);
    console.log(inputCurrencyTwo.value);
    return resultClickTwo;
}

function converter(one, two) {
    fetch(`https://api.exchangerate.host/convert?from=USD&to=EUR&amount=500`)
    .then(res => res.json())
    .then(data => {
     console.log(data);
     inputCurrencyTwo.value = data.result;
     console.log(data.result);
    })        
}

converter();
