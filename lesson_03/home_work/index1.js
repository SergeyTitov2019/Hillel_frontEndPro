/**************************************************************************************
*
*           1.Вывести числа от 20 до 30 через пробел используя шаг 0,5 (20 20,5 21 21,5….)
*
************************************************************************************** */
const box = document.getElementById('box')
const start = 20
const end = 30
let arrWholeNum = []
let arrFraction= []

for(let i = start; i <= end; i++){
    arrWholeNum.push(i)
    if(i < end){
        arrFraction.push(i+0.5)
    }
 }
// box.innerHTML = ([...arrWholeNum, ...arrFraction ].sort().toString().split(',').join(' '))

let data = ''
for(let i = start; i <= end; i +=0.5){
    data += i + ' '
}
box.innerHTML = data
// box.innerHTML
