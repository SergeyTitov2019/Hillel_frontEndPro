
const getNumbers = () => {
    let result = document.querySelector(".result")
    result.innerHTML = ''
    let symbolAct = '\+'
    let number1 = parseInt(document.querySelector('#number1').value)
    let number2 = parseInt(document.querySelector('#number2').value)
    result.innerHTML = `Result is: ${number1} ${symbolAct} ${number2}`
}

const onSum = () => {
    let result = document.querySelector(".result")
    result.innerHTML = ''
    let number1 = parseInt(document.querySelector('#number1').value)
    let number2 = parseInt(document.querySelector('#number2').value)
    result.innerHTML = `Result is: ${number1 + number2}`
}

const onSubtract = () => {
    let result = document.querySelector(".result")
    result.innerHTML = ''
    let number1 = parseInt(document.querySelector('#number1').value)
    let number2 = parseInt(document.querySelector('#number2').value)
    result.innerHTML = `Result is: ${number1 - number2}`
}
function onDivide () {
    let result = document.querySelector(".result")
    result.innerHTML = ''
    let number1 = parseInt(document.querySelector('#number1').value)
    let number2 = parseInt(document.querySelector('#number2').value)
    result.innerHTML = `Result is: ${(number1 / number2).toFixed(2)}`
}

function onCheckEqual () {
    let result = document.querySelector(".equal_result")
    let val1 = document.querySelector('#val-task2-1').value
    let val2 = document.querySelector('#val-task2-2').value
    result.innerHTML = `${val1 == val2 ? 'Values are equal' : 'Values are not equal'}`
}

function onAverageCalc () {
    let result = document.querySelector(".calc_result")
    let val1 = parseInt(document.querySelector('#val-task3-1').value)
    let val2 = parseInt(document.querySelector('#val-task3-2').value)
    let val3 = parseInt(document.querySelector('#val-task3-3').value)
    result.innerHTML = `Average: ${((val1 + val2 + val3)/3).toFixed(2)}`
}

function onStick(){
    let result = document.querySelector("#res-task-4")
    let val1 = document.querySelector('#val-task4-1').value
    let val2 = document.querySelector('#val-task4-2').value
    let val3 = document.querySelector('#val-task4-3').value
    result.innerHTML = val1 + ' ' + val2 + ' '+ val3
}

function onTransform(){
    let result = document.querySelector("#res-task-5")
    let val1 = document.querySelector('#val-task5-1').value
    let split = new String(val1).split("")
    result.innerHTML = split
    }


