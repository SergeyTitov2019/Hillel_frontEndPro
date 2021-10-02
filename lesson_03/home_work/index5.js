/********************************************************************************************************************
 *
 *           5.
 *           Дано некоторое число.
 *           Определить, можно ли получить это число путем возведения числа 3 в некоторую степень.
 *           (Например, числа 9, 81 можно получить, а 13 - нельзя)
 *
 *
 *********************************************************************************************************************/

const num = Math.floor(prompt('Введите целое число', 10))
const box = document.getElementById('box')
let res = null

const start = 1

for(let i = start; i <= num; i++){
    if(Math.pow(3, i) === num){
        res = i
    }
}

if(res){
    box.innerHTML = `Число <h5>${num}</h5> может быть получено путем возведения числа 3 в ${res}-ю степень.`
} else {
    box.innerHTML = `Число <h5>${num}</h5> не может быть получено путем возведения числа 3 в степень.`
}

