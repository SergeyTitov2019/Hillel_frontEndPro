const app = document.querySelector('#app')
const resultLeft = document.querySelector('.result-left')
const resultRight = document.querySelector('.result-right')
const nav_btn1 = document.querySelector('.link-1')

function task1(){
    const arr = []
    for(let i = 10; i <= 20; i++){
        arr.push(i)
        resultRight.innerHTML = arr
    }
}

function onClean(){
        resultRight.innerHTML = ''
}

function task2(){
    const arr = []
    for(let i = 10; i <= 20; i++){
        arr.push(i*i)
        resultRight.innerHTML = arr
    }
}


const locationResolver = (location) => {
    console.log('loc', location)
    console.log('app', app)
    switch (location) {
        case '#/task1/':
            resultLeft.innerHTML = `                 
            <div class="mb-3">
<!--                <label for="number1" class="form-label">${location}</label>-->
<!--                <input type="number" class="form-control input1" id="number1" value="">-->
                <button type="button" class="btn btn-outline-primary" onclick="task1()">Check</button>
                <button type="button" class="btn btn-outline-danger" onclick="onClean()">Clean</button>
            </div>                
            `
            break
        case '#/task2/':
            resultLeft.innerHTML = `
                <div class="mb-3">
                <button type="button" class="btn btn-outline-primary" onclick="task2()">Check</button>
                <button type="button" class="btn btn-outline-danger" onclick="onClean()">Clean</button>
            </div>   
            `
            break
        case '#/task3/':
            resultLeft.innerHTML = `
                <h1>Main</h1>
                <h3>${location}</h3>
            `
    }
}
