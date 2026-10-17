const numbers = document.getElementById('numbers');
const display = document.querySelector('input[type="text"]');
let operand1 = "";
let operand2 = "";
numbers.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    let buttonText = e.target.innerText;
    operand1 += buttonText;
    display.value = operand1;
})


function add(num1, num2)
{
    let oper1 = num1;
    let oper2 = num2;
    let operator = "+"; 
    return (num1 + num2);
};

function subtract(num1, num2)
{
    let oper1 = num1;
    let oper2 = num2;
    let operator = "-"; 
    return (num1 - num2);
};

function multiply(num1, num2)
{
    let oper1 = num1;
    let oper2 = num2;
    let operator = "*"; 
    return (num1 * num2);
};

function divide(num1, num2)
{
    let oper1 = num1;
    let oper2 = num2;
    let operator = "/"; 
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