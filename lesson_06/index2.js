/***************************************************************************************************************
 *
 *           2.
 *          Дан массив с элементами разных типов.
 *          Создать функцию которая высчитывает среднее арифметическое только числовых элементов данного массива.
 *
 ************************************************************************************************************* */

const arr = [5, true, 'Misha', 1, 2,14, 12,25,6,4, 'Zina', null, undefined]

function foo(array){
    let filteredArr = []
    let sum = 0
    let aver = 0
    for(let i = 0; i < array.length; i++){
        if(typeof array[i] === 'number'){
            filteredArr.push(array[i])
            sum += array[i]
            aver = sum / filteredArr.length
        }
    }
    return aver
}
foo(arr)
console.log('sum', foo(arr))
