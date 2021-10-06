/***************************************************************************************************************
 *
 *           2.
 *           Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
                 a.Найти сумму и количество положительных элементов.
                 b.Найти минимальный элемент массива и его порядковый номер.
                 c.Найти максимальный элемент массива и его порядковый номер.
                 d.Определить количество отрицательных элементов.
                 e.Найти количество нечетных положительных элементов.
                 f.Найти количество четных положительных элементов.
                 g.Найти сумму четных положительных элементов.
                 h.Найти сумму нечетных положительных элементов.
                 i.Найти произведение положительных элементов.
                 j.Найти наибольший среди элементов массива, остальные обнулить.
 *
 ************************************************************************************************************* */


const box = document.getElementById('box')
const arr =  [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
const arrIndex =  ['a', 'b', 'c','d', 'e','f', 'g', 'h', 'i','j']
let positive = 0
let minIndex = 0
let maxIndex = 0
let sort  = [...arr].sort((a, b) => a - b)
let negAmount = 0
let positiveOddAmount = 0
let positiveOddSum = 0
let positiveEvenAmount = 0
let positiveEvenSum = 0
let positiveMult = 1
let biggestNum = sort[arr.length-1]
let newArr = []

for(let i = 0; i <= arr.length; i++){
    if(arr[i] > 0){
        positive += arr[i]
        positiveMult *= arr[i]
    }
    if(arr[i] === sort[0]){
        minIndex = i
    }
    if(arr[i] === biggestNum){
        maxIndex = i

    }
    if (arr[i]  < 0){
        negAmount ++
    }
    if (arr[i]  > 0 && arr[i] % 2  ){
        positiveOddAmount ++
        positiveOddSum += arr[i]
    }
    if (arr[i]  > 0 && arr[i] % 2 === 0  ){
        positiveEvenAmount ++
        positiveEvenSum += arr[i]
    }
    if(arr[i] === biggestNum){
        newArr.push(arr[i])
    } else {
        newArr.push(0)
    }
}




box.innerHTML = `
<div class="arr-box"> <h6><span>${`${arrIndex[0]}. `}</span>Сумма положительных чисел:</h6> <span>${positive}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[1]}. `}</span>Минимальный элемент массива:</h6> <span>${sort[0]}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[1]}. `}</span> -- Его индекс в массиве:</h6> <span></span>${minIndex}</div>
<div class="arr-box"> <h6><span>${`${arrIndex[1]}. `}</span> -- Его порядковый № в массиве:</h6> <span></span>${minIndex - 1}</div>
<div class="arr-box"> <h6><span>${`${arrIndex[2]}. `}</span>Максимальный элемент массива:</h6> <span>${biggestNum}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[2]}. `}</span> -- Его индекс в массиве:</h6> <span></span>${maxIndex}</div>
<div class="arr-box"> <h6><span>${`${arrIndex[2]}. `}</span> -- Его порядковый №  в массиве:</h6> <span></span>${maxIndex - 1}</div>
<div class="arr-box"> <h6><span>${`${arrIndex[3]}. `}</span>Количество отрицательных элементов: </h6> <span>${negAmount}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[4]}. `}</span>Количество нечетных положительных элементов </h6> <span>${positiveOddAmount}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[5]}. `}</span>Количество четных положительных элементов </h6> <span>${positiveEvenAmount}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[6]}. `}</span>Сумма четных положительных элементов </h6> <span>${positiveEvenSum}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[7]}. `}</span>Сумма нечетных положительных элементов </h6> <span>${positiveOddSum}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[8]}. `}</span>Произведение положительных элементов </h6> <span>${positiveMult.toLocaleString()}</span></div>
<div class="arr-box"> <h6><span>${`${arrIndex[9]}. `}</span>Наибольший и обнуление </h6> <span>${newArr}</span></div>
`


