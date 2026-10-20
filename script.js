const numbers = document.getElementById('numbers');
const operators = document.getElementById('operators')
const display = document.querySelector('input[type="text"]');
const clear = document.getElementById('clear');
let operand1 = "";
let operand2 = "";
let clickCount = 0;
let result = 0;
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
if (e.target.tagName !== 'BUTTON') return;
    if(clickCount == 1){
        clickCount++;
        
        let buttonText3 = e.target.innerText;
        let result = operate(parseInt(operand1, 10), parseInt(operand2, 10), buttonText3);
            display.value = result;
        operand1 = String(result);
        operand2 = "";}
    else if(clickCount==0)
    {
        clickCount++;
        display.value = "";
        console.log(operand1)
    }    
    }) 


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