/**************************************************************************************
 *
 *           9.Дано натуральное число. Найти и вывести на страницу все его делители.
                    - Определить количество его четных делителей
                    - Найти сумму его четных делителей
 *
 ************************************************************************************** */

let naturalNumber = prompt('Введите натуральное число:', 1000);

document.write("Его четные делители:")
document.write(`</br>`)

for(let i = 0; i <= naturalNumber; i++){
    if(naturalNumber % i === 0 && i % 2===0){
            document.write( i + ',  ')
    }
}
document.write(`</br>`)
document.write(`</br>`)

document.write("Количество его четных делителей:")
document.write(`</br>`)

/*******************************************/

let amountTask9 = []

for(let i = 0; i <= naturalNumber; i++){
    if(naturalNumber % i === 0 && i % 2===0){
        amountTask9.push(i)
    }
}
document.write(amountTask9.length)
document.write(`</br>`)
document.write(`</br>`)

/*******************************************/


document.write("Сумма его четных делителей:")
document.write(`</br>`)

let sumEvenTask9 = 0

for(let i = 0; i <= naturalNumber; i++){
    if(naturalNumber % i === 0 && i % 2===0){
        sumEvenTask9 += i
    }
}
document.write(sumEvenTask9)
