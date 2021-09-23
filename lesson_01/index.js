

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





