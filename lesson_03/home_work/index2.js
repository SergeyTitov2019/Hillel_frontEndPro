/***************************************************************************************************************
 *
 *           2.Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
 *
 ************************************************************************************************************* */


const box = document.getElementById('box')
const start = 10
const end = 100
const rate = 27

for(let i = start; i <= end; i++){
    if(i % 10 === 0){
        document.write(`${i} usd = ${i * rate} грн`)
        document.write(`</br>`)
    }
}
box.innerHTML = (`1 usd = ${rate} грн`)


