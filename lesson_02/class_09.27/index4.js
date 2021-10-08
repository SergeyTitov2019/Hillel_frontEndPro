/*******************************************************************************************************************
 *
 *           4.Дано число.
 *           Определить, заканчивается оно четной цифрой или нечетной?
 *           Вывести последнюю цифру.
 *
 *
 *********************************************************************************************************************/
const box = document.getElementById('box')

const num = parseInt(prompt('Введите число', 0))
let lastDigit = num % 10


if (lastDigit === 0) {
    box.innerHTML = `
            <div class="arr-box"> <h6>Вы ввели число: </h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6> Оно заканчивается нолем </h6></div>
        `
} else if (lastDigit % 2 === 0) {
    box.innerHTML = `
            <div class="arr-box"> <h6>Вы ввели число: </h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6> Оно заканчивается четной цифрой </h6></div>
            <div class="arr-box"> <h6> Эта цифра </h6>${lastDigit}</div>
        `
} else if (lastDigit % 2) {
    box.innerHTML = `
            <div class="arr-box"> <h6>Вы ввели число: </h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6> Оно заканчивается нечетной цифрой </h6></div>
            <div class="arr-box"> <h6> Эта цифра </h6>${lastDigit}</div>
        `
}




