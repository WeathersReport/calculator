const numbers = document.getElementById('numbers');
const operators = document.getElementById('operators')
const display = document.querySelector('input[type="text"]');
const clear = document.getElementById('clear');
let operand1 = "";
let operand2 = "";
let clickCount = 0;
let result = 0;
 let operator1 = "";
numbers.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return;
     let buttonText = e.target.innerText;
    if (clickCount == 0){
        operand1 = operand1 + buttonText;
        display.value = operand1;}
    else if (clickCount == 1)
    {  
        operand2 = operand2 + buttonText;
        display.value = operand2;      
    }
    else
    {
        clickCount = 0;
        operand1 = buttonText;
        operand2 = "";
        display.value = operand1;
    }
  
})

clear.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    display.value = "";
    result = 0;
    operand2 = "";
    operand1 = "";
    clickCount = 0;
})



operators.addEventListener("click", (e) => {
   if (e.target.tagName !== "BUTTON") return;

    const clickedOperator = e.target.innerText;

    if (clickCount === 0) {
        operator1 = clickedOperator;
        clickCount = 1;
        display.value = "";
    }
    else if (clickCount === 1 ) {
        result = operate(
            Number(operand1),
            Number(operand2),
            operator1
        );
        if(clickedOperator=="="){
            display.value=result;
            operand1 = "";
            operand2 = "";
            operator1 = "";
            clickcount = 0;
            return;
        }
        display.value = result;
        operand1 = String(result);
        operand2 = "";
        operator1 = clickedOperator;
        clickCount = 1;
    }
    else if (clickCount === 2) {
        operator1 = clickedOperator;
        clickCount = 1;
        display.value = "";
    }
});


function add(num1, num2)
{
    return (num1 + num2);
};

function subtract(num1, num2)
{
    return (num1 - num2);
};

function multiply(num1, num2)
{
    return (num1 * num2);
};

function divide(num1, num2)
{
    if(num2 == 0)
        return "no can do"
    return (num1 / num2);
};

function operate(num1, num2, operator)
{
    switch(operator)
    {
        case "+":
         return add(num1,num2);
         break;
        case "-":
         return subtract(num1,num2);
         break;
        case "*":
         return multiply(num1,num2);
         break;
        case "/":
         return divide(num1,num2);
         break;


    }
}