/**
 *
 *      5.
 *      Cоздать приложение для отображения результатов голосования.
 *      В качестве вариантов ответа - смайлики.
 *      По умолчанию, 5шт.
        Вывод данных - смайлики в одну строку, под ними - количество проголосовавших за каждый смайл.
        При клике на смайл - под ним изменяется значение счетчика.
        Реализовать таким образом, чтобы добавление новых вариантов ответа не вело к добавлению новых функций.
 *
 **/

const box = document.getElementById('box')
const imgElem = document.getElementById('btn-container-5').getElementsByTagName('div')
console.log(imgElem)
let num = 0


function showTask() {
    document.getElementById('btn-container-5').classList.remove('disappear-class')
}

function addP(){
    for (let i = 0; i < imgElem.length; i++) {
        let p = document.createElement('p');
        p.innerHTML =  ` <p>${ num }</p>`
        imgElem[i].appendChild(p)
    }
    clickVote()

}

function inc(){
    num ++
   console.log(num)
}

function clickVote(){
    for (let i = 0; i < imgElem.length; i++) {
       imgElem[i].addEventListener('click', e => inc())
    }
}


showTask()
addP()
// clickVote()