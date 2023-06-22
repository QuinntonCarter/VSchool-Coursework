const readline = require("readline-sync");
const startEquation = ["Enter a number "];
const secQ = ["Enter second number"];
const options = ['multiply', 'divide', 'add', 'subtract'];
let inputs = {
    firstNum: 0,
    secNum: 0
};

let calculating = true

const multiply = (num1, num2) => {
    let product = inputs.firstNum * inputs.secNum
    return console.log(`${inputs.firstNum} x ${inputs.secNum} = ${product}`)
};

const divide = () => {
    let quotient = inputs.firstNum / inputs.secNum
    return console.log(`${inputs.firstNum} ÷ ${inputs.secNum} = ${quotient}`)
};

const add = () => {
    let sum = inputs.firstNum + inputs.secNum
    return console.log(`${inputs.firstNum} + ${inputs.secNum} = ${sum}`)
};

const subtract = () => {
    let difference = inputs.firstNum - inputs.secNum
    return console.log(`${inputs.firstNum} - ${inputs.secNum} = ${difference}`)
};

while(calculating){
    inputs.firstNum = readline.questionInt(startEquation, ['1-9'])
    inputs.secNum = readline.questionInt(secQ, ['1-9'])
    selection = readline.keyInSelect(options, 'Which method?')
    console.log(selection)
    if(selection === 0){
        calculating = false
        multiply()
    } else if(selection === 1){
        calculating = false
        divide()
    } else if(selection === 2){
        calculating = false
        add()
    } else if(selection === 3){
        calculating = false
        subtract()
    } 
};