/********************************************************************************************************************
 *
 *           7.
 *           Дано трехзначное число.
                Верно ли, что все его цифры одинаковые?
                Есть ли среди его цифр одинаковые?
 *
 *
 *********************************************************************************************************************/

const box = document.getElementById('box')
const num = parseInt(prompt('Введите 3-x значное число', 0))

let respond_1 = ''
let respond_2 = ''

let arr = [...num + ''].map(i => +i)

if(arr[0] === arr[1] && arr[0] === arr[2] && arr[1] === arr[2]){
    respond_1 = 'да'
} else {
    respond_1 = 'нет'
}

if(arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]){
    respond_2 = 'да'
} else {
    respond_2 = 'нет'
}

const messages = [
    'Вы ввели число: ',
    'Верно ли, что все его цифры одинаковые?',
    'Есть ли среди его цифр одинаковые?'
]

box.innerHTML = `
            <div class="arr-box"> <h6> ${messages[0]} </h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>${messages[1]} </h6><span>${respond_1}</span></div>
            <div class="arr-box"> <h6>${messages[2]} </h6><span>${respond_2}</span></div>
        `

