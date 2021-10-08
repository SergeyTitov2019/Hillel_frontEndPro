/********************************************************************************************************************
 *
 *           6.
 *           Дано трехзначное число.
                Определить является ли четной сумма его цифр.
                Определить, кратна ли сумма его цифр пяти.
                Определить является ли произведение его цифр больше 100.
 *
 *
 *********************************************************************************************************************/

const box = document.getElementById('box')

const num = parseInt(prompt('Введите 3-x значное число', 0))
let firstDigit  = (num - (num % 100))/100
let thirdDigit  = (num % 10)
let secondDigit = ((num % 100) - thirdDigit)/10
const sum = firstDigit + thirdDigit + secondDigit
const mult = firstDigit * thirdDigit * secondDigit
let respond_1 = ''
let respond_2 = ''
let respond_3 = ''

console.log(firstDigit ,secondDigit, thirdDigit)
console.log(sum ,mult)
console.log(respond_1, respond_2, respond_3)

const messages = [
    'Вы ввели число: ',
    'Является ли четной сумма его цифр?',
    'Кратна ли сумма его цифр 5-и?',
    'Является ли произведение его цифр больше 100?',
    'Сумма всех его составных цифр',
    'Произведение всех его составных цифр'
]

if (sum % 2 === 0 ) {
    respond_1 = 'да'
} else if (sum % 2 !==0 ) {
    respond_1 = 'нет'
}

if (mult % 5 === 0 ) {
    respond_2 = 'да'
} else if (mult % 5 !==0 ) {
    respond_2 = 'нет'
}

if (mult > 100 ) {
    respond_3 = 'да'
} else if (mult < 100 ) {
    respond_3 = 'нет'
} else {
    respond_3 = 'равно 100'

}


box.innerHTML = `
            <div class="arr-box"> <h6> ${messages[0]} </h6> <span>${num}</span></div>
            <div class="arr-box"> <h6> ${messages[4]} </h6> <span>${sum}</span></div>
            <div class="arr-box"> <h6> ${messages[5]} </h6> <span>${mult}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>${messages[1]} </h6><span>${respond_1}</span></div>
            <div class="arr-box"> <h6>${messages[2]} </h6><span>${respond_2}</span></div>
            <div class="arr-box"> <h6>${messages[3]} </h6><span>${respond_3}</span></div>
        `


