/**************************************************************************************
 *
 *           3.
 *           Определить, является ли число a делителем числа b ? И наоборот.
 *           (Дать два ответа)
 *
 ************************************************************************************** */

const box = document.getElementById('box')

const firstNum = parseInt(prompt('Введите 1е число', 0))
const secondNum = parseInt(prompt('Введите 2е число', 0))

function compare(a, b) {
    if (a === b) {
        box.innerHTML = `
            <div class="arr-box"> <h6>Ваше 1-е число: </h6> <span>${a}</span></div>
            <div class="arr-box"> <h6>Ваше 2-е число: </h6> <span>${b}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6> Они равны </h6></div>
        `
    } else if (a % b === 0) {
        box.innerHTML = `
            <div class="arr-box"> <h6>Ваше 1-е число: </h6> <span>${a}</span></div>
            <div class="arr-box"> <h6>Ваше 2-е число: </h6> <span>${b}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6> Второе - делитель первого </h6></div>
        `
    } else if (b % a === 0) {
        box.innerHTML = `
            <div class="arr-box"> <h6>Ваше 1-е число: </h6> <span>${a}</span></div>
            <div class="arr-box"> <h6>Ваше 2-е число: </h6> <span>${b}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6> Первое - делитель второго </h6></div>
        `
    } else {
        box.innerHTML = `
            <div class="arr-box"> <h6>Ваше 1-е число: </h6> <span>${a}</span></div>
            <div class="arr-box"> <h6>Ваше 2-е число: </h6> <span>${b}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6> Они не делители друг друга  </h6></div>
        `
    }
}

compare(firstNum, secondNum)

