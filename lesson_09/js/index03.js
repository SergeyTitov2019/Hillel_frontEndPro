/**
 *
 *      3.Вывести таблицу 10 × 10, заполненную числами от 1 до 100
 *      (таблица создаётся динамически)
 *
 **/

const box = document.getElementById('box')
let my_div = newDiv = null;

function addElement() {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<h1>Привет!</h1>";

    // Добавляем только что созданный элемент в дерево DOM

    my_div = document.getElementById("org_div1");
    document.body.insertBefore(newDiv, my_div);
}