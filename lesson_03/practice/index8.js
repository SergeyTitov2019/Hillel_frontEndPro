/**************************************************************************************
 *
 *           8.Вывести все числа в диапазоне от 100 до 200 кратные 3
 *
 ************************************************************************************** */

let startTask8 = 100
let endTask8 = 200

for(let i = startTask8; i <= endTask8; i++){
    if(i % 3 === 0){
        document.write( i + ',  ')
    }
}
