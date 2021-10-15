/**************************************************************************************
 *
 *           3.
 *           Написать функцию doMath(x, znak, y),
 *           которая получает 3 аргумента:
 *              числа x и y,
 *              строку znak.
 *           В переменной znak может быть: +, -, *, /, %, ^ (степень).
 *           Вывести результат математического действия, указанного в переменной znak.
 *           Оба числа и знак получаются от пользователя.
 *
 ************************************************************************************** */

const box = document.getElementById('box')
let num1 = getNum1()
let num2 = getNum2()
let symb = getSymbol()

function getNum1(){
    let num = parseInt(prompt('Ведите число Х', 1))
    return num
}
function getNum2(){
    let num = parseInt(prompt('Ведите число Y', 1))
    return num
}
function getSymbol(){
   let symb = prompt('Ведите символ мат действия', '+')
    return symb
}

function getResult(num1, num2, sym){
    let res
    switch (sym){
        case '+':
            res = num1 + num2
            break
        case '-':
            res = num1 - num2
            break
        case '*':
            res = num1 * num2
            break
        case '/':
            res = num1 / num2
            break
        case '%':
            res = num1 % num2
            break
        case '^':
            res = num1 * num2
            break
    }
    return res
}
function layout(){
    return box.innerHTML = `
            <div class="box-content"><h5>Ваш первый знак:</h5> <span>${num1}</span> </div>
            <div class="box-content"><h5>Ваш второй знак:</h5> <span>${num2}</span> </div>
            <div class="box-content"><h5>Знак операции:</h5> <span>${symb}</span> </div>
            <hr>
            <div class="box-content"><h5>Результат опреции:</h5> <span>${getResult(num1, num2, symb)}</span> </div>
`
}
layout()
