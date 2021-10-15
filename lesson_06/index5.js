/********************************************************************************************************************
 *
 *           5.
 *           Создать функцию, которая убирает из строки все символы,
 *           которые мы передали вторым аргументом.
 *           'func("hello world", ['l', 'd'])' вернет нам "heo wor".
 *           Исходную строку и символы для удаления задаёт пользователь
 *
 *
 *********************************************************************************************************************/
const box = document.getElementById('box')
let expression = []
let exceptions

function getExpression (){
    expression = Array.from(prompt('Ведите выражение', 'hello world'))
    return expression
}

function getExceptions (){
    exceptions = Array.from(prompt('Ведите символы без разделитлей', 'he'))
    return exceptions
}

function filterFunc(base, except){
    return base.filter(item => {
        return !except.includes(item)
    })
}

function layout(){
        return box.innerHTML = `
            <div class="box-content"><h5>Ваша строка:</h5> <span>${expression.join('')}</span> </div>
            <div class="box-content"><h5>Знаки удалить:</h5> <span>${exceptions.join('')}</span> </div>
            <div class="box-content"><h5>Ваша строка без знаков:</h5> <span>${filterFunc(expression, exceptions).join('')}</span> </div>
`
}

getExpression()
getExceptions()
layout()


/*               хотел сделать через циклы, но не получилось. Можешь подсказать?         */


function filter(array, array2){
    let newArr = []
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array2.length ; j++) {
            if(array[i] !== array2[j]){
                newArr.push(array[i])
            }
        }
    }
    return newArr
}

