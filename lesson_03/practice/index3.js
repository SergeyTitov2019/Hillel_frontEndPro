/**************************************************************************************
 *
 *           3.Вывести таблицу умножения на 7
 *
 ************************************************************************************** */
const num = 7

for(let i = 1; i <= 10; i++){
    for (let j = 1; j <= num; j++) {
        document.write( `${i} x ${j} = ${i*j} </br>` )
    }
    document.write(`</br>`)
}
