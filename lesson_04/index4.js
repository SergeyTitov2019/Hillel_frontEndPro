/*******************************************************************************************************************
 *
 *           4.
 *           Дано целое число.
 *           Выяснить, является ли оно простым
 *           (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).
 *
 *********************************************************************************************************************/
const num = Math.floor(prompt('Введите целое число', 10))
const box = document.getElementById('box')

const start = 1
let arr = []

for(let i = start; i <= num; i++){
    if(num % i === 0){
        arr.push(i)
    }
}
if(arr.length > 2){
    box.innerHTML = `Number <h5>${num}</h5> is not simple.`
} else {
    box.innerHTML = `<h5>Congrats!</h5> Number <h5>${num}</h5> IS simple.`

}

