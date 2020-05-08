const digitsArray = Array.from(document.querySelectorAll('.digits'));
const allDigits = digitsArray.reverse().map(item => item)
const operators = Array.from(document.querySelectorAll('.operator'));
const decimal = document.querySelector('.decimal');
const display = document.querySelector('.input-display');
const calculate = document.querySelector('.calculate');
const clear = document.querySelector('.clear');
const bgGray = document.querySelectorAll('.gray-bg');
const bgLight = document.querySelectorAll('.bg-light');
const bgOrange = document.querySelectorAll('.bg-orange');
let isOperatorClicked = false;
let isDecimalClicked = false;
let num1 = "";
let num2 = "";
let operator;
let result;

decimal.addEventListener("click", function(){
    if (num1){
        !isOperatorClicked ? num1 += '.' : num2 += '.'
        isDecimalClicked = true
    }
})

allDigits.forEach((item, i) => (
    item.value = i,
    item.addEventListener('click', function(e){
        !isOperatorClicked ? 
            (num1 += e.target.value, display.value = num1)
        :
            (num2 += e.target.value, display.value = num2)
        display.innerHTML = display.value;
    })
))

operators.forEach((item, i) => (
    item.addEventListener('click', function(e){
        isOperatorClicked = true;
        e.target.value = item.id;
        // item.classList.add('toggle-bg-orange')
        num1.length === 0 ? (num1 = result) : ""
        num1.length === 0 ? (num1 = result) : ""
        switch(item.id){
            case "add":
                operator = "add"
                break;
            case "subtract":
                operator = "subtract"
                break;
            case "multiply":
                operator = "multiply"
                break;
            case "divide":
                operator = "divide"
                break;
            default:
                return;
        }
    })
))

const calculation = ((no1, no2) => {
    no1 = parseFloat(num1),
    no2 = parseFloat(num2)
    switch(operator){
        case "add":
            result = no1 + no2
            break;
        case "subtract":
            result = no1 - no2
            break;
        case "multiply":
            result = no1 * no2
            break;
        case "divide":
            result = no1 / no2
            break;
        default:
            return;
    }
})

const clearAll = () => (
    num1 = '',
    num2 = '',
    isOperatorClicked = false,
    isDecimalClicked = false
)

const handleCalculateKey = () => {
    calculation()
    clearAll()
}

calculate.addEventListener('click', function(){
    handleCalculateKey()
    display.textContent = result
})

clear.addEventListener('click', function(){
    clearAll()
    display.textContent = 0
})

bgGray.forEach(item => {
    item.addEventListener("click", function(){
        setTimeout(() => {
            item.classList.remove('clicked')
        }, 300, item.classList.add('clicked'))
    })
})

bgLight.forEach(item => {
    item.addEventListener("click", function(){
        setTimeout(() => {
            item.classList.remove('toggle-bg-light')
        }, 500, item.classList.add('toggle-bg-light'))
    })
})

calculate.addEventListener("click", function(){
    setTimeout(() => {
        calculate.classList.remove('toggle-bg-orange')
    }, 500, calculate.classList.add('toggle-bg-orange'))
})
