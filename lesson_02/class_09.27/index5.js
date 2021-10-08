/********************************************************************************************************************
 *
 *           5.
 *           Дано двузначное число. Определить, какая из его цифр больше: первая или вторая?
 *
 *
 *********************************************************************************************************************/

const box = document.getElementById('box')

const num = parseInt(prompt('Введите 2-узначное число', 0))
let secondDigit = num % 10
let firstDigit  = (num - secondDigit) / 10

const messages = [
    'Вы ввели число: ',
    'Первая цифра вашего числа больше второй',
    'Втораяая цифра вашего числа больше первой',
    'Первая и вторая цифры вашего числа равны'
]


if (firstDigit > secondDigit) {
    box.innerHTML = `
            <div class="arr-box"> <h6> ${messages[0]} </h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>${messages[1]} </h6></div>
        `
} else if (firstDigit < secondDigit) {
    box.innerHTML = `
            <div class="arr-box"> <h6>${messages[0]} </h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>${messages[2]}</h6></div>
        `
} else  {
    box.innerHTML = `
            <div class="arr-box"> <h6>${messages[0]}</h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>${messages[3]}</h6></div>
      `
}




