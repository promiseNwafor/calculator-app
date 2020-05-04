const allDigits = Array.from(document.querySelectorAll('.digits'));
const operators = Array.from(document.querySelectorAll('.operator'));
const display = document.querySelector('.input-display');
const calculate = document.querySelector('.calculate');
let isOperatorClicked = false;
let num1 = "";
let num2 = "";
let operator;


allDigits.forEach((item, i) => (
    item.value = i,
    item.addEventListener('click', function(e){
        if (!isOperatorClicked){
            num1 += e.target.value;
            display.value = num1;
            console.log('num1 ' + num1)
        }else{
            num2 += e.target.value;
            display.value = num2;
            console.log('num2 ' + num2)
        }
        display.innerHTML = display.value;
    })
))

operators.forEach((item, i) => (
    item.addEventListener('click', function(e){
        isOperatorClicked = true;
        e.target.value = item.id;
        if (item.id === "add"){
           operator = 'add'
        }
    })
))


const calculation = ((no1, no2) => {
    no1 = parseFloat(num1),
    no2 = parseFloat(num2)
    if(operator === 'add'){
        console.log(no1 + no2)
    }
})

const callBack = () => {
    calculation()
    return(
        num1 = 0,
        num2 = 0,
        isOperatorClicked = false
    )
}

calculate.addEventListener('click', callBack)







