
function displayPic(){
    imgCursorLeft.addEventListener('click', picLeft)
    imgCursorRight.addEventListener('click', picRight)
}

function picLeft(){
    imgContainer.setAttribute('src', `./emoji/${pickNum}.png`)

    if(pickNum > 1){
        imgCursorRight.classList.remove('invisible')
        pickNum --
    }
    if(pickNum === 1){
        imgCursorLeft.classList.add('invisible')
    }
}

function picRight(){
    imgContainer.setAttribute('src', `./emoji/${pickNum}.png`)

    if(pickNum >= 4){
        imgCursorRight.classList.add('invisible')
        pickNum ++
    } else {
        imgCursorLeft.classList.remove('invisible')
        pickNum ++
    }
}