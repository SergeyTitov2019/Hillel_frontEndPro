const box = document.getElementById('box')
const imgContainer = document.createElement('img')
const imgCursorLeft = document.createElement('input')
const imgCursorRight = document.createElement('input')
let pickNum = Math.floor(Math.random() * (5 - 1)) + 1;
imgContainer.classList.add('img-container')
imgContainer.setAttribute('src', `./emoji/${pickNum}.png`)

imgCursorLeft.setAttribute('type', 'button')
imgCursorRight.setAttribute('type', 'button')

imgCursorLeft.classList.add('row-direction')
imgCursorRight.classList.add('row-direction')
imgCursorLeft.setAttribute('value', '<')
imgCursorRight.setAttribute('value', '>')

box.appendChild(imgContainer)
box.appendChild(imgCursorRight)
box.insertBefore(imgCursorLeft, imgContainer)