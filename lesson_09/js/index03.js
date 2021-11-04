/**
 *
 *      3.Вывести таблицу 10 × 10, заполненную числами от 1 до 100
 *      (таблица создаётся динамически)
 *
 **/

const box = document.getElementById('box')

function tableChess() {
    let num = 0
    let table = document.createElement("table");
    for (let i = 1; i < 11; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j < 11; j++) {
            let td = document.createElement('td');
            num ++
            td.className = "form"
            td.innerText = num
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    box.appendChild(table);

}

tableChess()