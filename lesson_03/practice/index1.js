/**************************************************************************************
*
*           1.Вывести на страницу в одну строку через запятую числа от 10 до 20
*
************************************************************************************** */
const start = 10
const end = 20

for(let i = start; i <= end; i++){
    if(i < end){
        document.write(i  + ',  ')
    } else{
        document.write(i)
    }
}
