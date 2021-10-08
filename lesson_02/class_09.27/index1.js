/**************************************************************************************
*
*           1.Даны два различных числа. Определить какое из них больше, а какое меньше.
*
************************************************************************************** */
const box = document.getElementById('box')

const firstNum = parseInt(prompt('Введите 1е число', 0))
const secondNum = parseInt(prompt('Введите 2е число', 0))

function compare(a, b) {
    if (a > b) {
        box.innerHTML = `
            <div class="arr-box"> <h6>Ваше 1-е число: </h6> <span>${a}</span></div>
            <div class="arr-box"> <h6>Ваше 2-е число: </h6> <span>${b}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>Из них больше 1-е </h6></div>
        `
    } else if (b > a) {
        box.innerHTML = `
            <div class="arr-box"> <h6>Ваше 1-е число: </h6> <span>${a}</span></div>
            <div class="arr-box"> <h6>Ваше 2-е число: </h6> <span>${b}</span></div>
            <br>
            <hr>       
            <div class="arr-box"> <h6>Из них больше 2-е </h6></div>
        `
    }
}

compare(firstNum, secondNum)

