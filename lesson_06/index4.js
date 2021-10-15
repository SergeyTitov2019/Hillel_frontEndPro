/*******************************************************************************************************************
 *
 *           4.
 *         Написать функцию заполнения пользовательскими данными двумерного массива.
 *         Длину основного массива и внутренних массивов задаёт пользователь.
 *         Значения всех элементов всех массивов задаёт пользователь.
 *
 *********************************************************************************************************************/

const box = document.getElementById('box')
let array = []
let arrayCustomLength = getArrLength()
let arrayCustomContent = getArrContent()

function getArrLength(){
    let customLength = prompt('Ведите длинну массива', 5)
    return customLength
}
function getArrContent(){
    let customLength = prompt('Укажите длинну внутренних массивов', 5)
    return customLength
}
function getNestedArray(){
    for (let i = 0; i < arrayCustomLength; i++) {
        let arr = []
        for (let j = 0; j < arrayCustomContent; j++) {
            arr.push(Math.floor(Math.random()*100))
        }
        array.push(arr)
    }
}
function layout(){
    getNestedArray()
    console.log('array', array)
}




layout()






