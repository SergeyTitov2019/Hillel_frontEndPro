/**************************************************************************************
 *
 *           9.Дано натуральное число.
 *                  - Найти и вывести на страницу все его делители.
 *                  - Определить количество его четных делителей
 *                  - Найти сумму его четных делителей
 *
 ************************************************************************************** */

const box = document.getElementById('box');
let naturalNumber = prompt('Введите натуральное число:', 1000);
let dividers = [];
let evenDivider = [];
let sumEvenDivider = 0;

for (let i = 0; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        dividers.push(i)
    }
    if (naturalNumber % i === 0 && i % 2 === 0) {
        evenDivider.push(i)
        sumEvenDivider += i;
    }
}

box.innerHTML = `
<div class="arr-box"> <h6>Вы ввели число:</h6> <span>${naturalNumber}</span></div>
<div class="arr-box"> <h6>Вот eго делители:</h6> <span>${dividers}</span></div>
<div class="arr-box"> <h6>Вот eго четные делители:</h6> <span>${evenDivider}</span></div>
<div class="arr-box"> <h6>Это сумма его четных делителей: </h6> <span>${sumEvenDivider}</span></div>
`
