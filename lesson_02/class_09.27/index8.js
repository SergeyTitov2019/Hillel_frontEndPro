/********************************************************************************************************************
 *
 *           8.
 *           Определить, является ли заданное шестизначное число зеркальным? (123321, 147741)
 *
 *
 *********************************************************************************************************************/

const box = document.getElementById('box')
const num = parseInt(prompt('Введите 6-и значное число', 123456))

let respond = ''
let arr = [...num + ''].map(i => +i)
let firstPart = [...arr].splice(0,3)
let secondPart = [...arr].splice(3,6).reverse()
let firstPartNum = parseInt('' + firstPart[0] + firstPart[1] + firstPart[2])
let secondPartNum = parseInt(''+ secondPart[0] + secondPart[1] + secondPart[2])

firstPartNum === secondPartNum ? respond = 'да' : respond = 'нет'

const messages = [
    'Вы ввели число: ',
    'Является ли заданное шестизначное число зеркальным?',
]

box.innerHTML = `
            <div class="arr-box"> <h6>${messages[0]}</h6> <span>${num}</span></div>
            <br>
            <hr>
            <div class="arr-box"> <h6>${messages[1]}</h6><span>${respond}</span></div>
        `

