/**
 *
 *      2.На странице есть две кнопки.
 *      При клике на первую кнопку просим пользователя ввести в prompt ссылку,
 *      при клике на вторую - переадресовывается на другой сайт
 *      (по ранее введенной ссылке).
 *      Реализовать проверку на http / https. Если протокол не указан - добавляем
 *
 **/

const box = document.getElementById('box')
const btnAddLink = document.getElementById('btn-container').getElementsByTagName('button')[0]
const goToLink = document.getElementById('btn-container').getElementsByTagName('button')[1]
let link = ''

console.log(btnAddLink)

function showTask() {
    document.getElementById('btn-container').classList.remove('disappear-class')
}

function promptLink() {
    link = prompt('Type your link', 'https://google.com')
    chekLink()
    console.log(link)
}

function linkRequest() {
    btnAddLink.addEventListener('click', e => promptLink())
}
function clickToLink() {
    goToLink.addEventListener('click', e => goToNewLink())
}

function goToNewLink(){
    document.location.replace(link);
}

function chekLink(){
    if(link.indexOf('https') !== -1){
        return link
    } else {
        link = 'https://' + link
    }
}

linkRequest()
showTask()
chekLink()
clickToLink()