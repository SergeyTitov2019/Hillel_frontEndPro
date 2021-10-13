
const btnClick = () => {
    let discount = 0
    let total = selectedAmount.value * products[selectedItem.value].price
    if(selectedAmount.value * products[selectedItem.value].price > 3000){
        discount = 20
    }
    return box.innerHTML = `
            <div class="box-content"><h5>Категория товара:</h5> <span>${products[selectedCategory.value].category}</span> </div>
            <div class="box-content"><h5>Наименование: </h5><span>${products[selectedItem.value].name }</span> </div>
            <div class="box-content"><h5>Цена: </h5><span>${`$ ${ products[selectedItem.value].price.toLocaleString() }`}</span> </div>
            <div class="box-content"><h5>Количество: </h5><span>${selectedAmount.value}</span> </div>
            <div class="box-content"><h5>Стоимость заказа: </h5><span>${`$ ${total.toLocaleString()}`}</span> </div>
            <div class="box-content"><h5>Ваша скидка: </h5><span>${`$ ${discount}`}</span> </div>
            <div class="box-content"><h5>К оплате: </h5><span>${`$ ${ discount ? (total*(100-discount)/100).toLocaleString() : total.toLocaleString() }`}</span> </div>
`
}

