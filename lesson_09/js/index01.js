/**
 *
 *      Имеется текстовое поле на странице.
 *      При фокусировке на этом поле сбоку появляется <div> с информацией.
 *      При пропаже фокуса - <div> так же пропадает
 *
 **/

const box = document.getElementById('box')
const boxAlert = document.getElementById('alert-box')

function getInfo(){
    box.addEventListener('mouseover', e => {
        boxAlert.classList.remove('disappear-class')
    });
}

function removeInfo(){
    box.addEventListener('mouseleave', e => {
        boxAlert.classList.add('disappear-class')
    });
}

getInfo()
removeInfo()