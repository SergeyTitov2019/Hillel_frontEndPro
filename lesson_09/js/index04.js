/**
 *
 *      4.В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
 *      Вывести изображение из этой папки полученное случайным образом (Math.random)
 *
 **/

const box = document.getElementById('box')
const btnAddPic = document.getElementById('btn-4')

let num = 1

function showTask() {
    document.getElementById('btn-container-4').classList.remove('disappear-class')
}

function getRandomPic(min, max){
    box.innerHTML = `<img src="./images/${num}.png" class="image" >`
    num =  Math.floor(Math.random() * (max - min) + min);
    console.log(num)
}

function clickImg() {
    btnAddPic.addEventListener('click', e => getRandomPic(1,5))
}

showTask()
clickImg()