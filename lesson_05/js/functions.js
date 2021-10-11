
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


/******************************************************************************
*
*                           class method
*
* ******************************************************************************/

function getAmount(){
    do {
        // if (productAmount !== undefined) {
        //   alert('You entered the wrong amount. Try again!');
        // }
        productAmount = parseInt(prompt('Please enter the product amount (from 1 to ' + selectedProduct.count + '):'));
    } while(!(productAmount > 0 && productAmount <= selectedProduct.count));

}

function getItem(){
    do {
        productNumber = parseInt(prompt('Please enter the product Number (from 1 to ' + products.length + '):'));
    } while (!(productNumber > 0 && productNumber <= products.length));
}

function getCategory(){

}

function getDiscount(){
    if (totalPrice > priceToGetDiscount) {
        const priceWithDiscount = totalPrice * discountValueToCalculate;
        document.write('<p>You will get the discount ' + discountValue + '%</p>');
        document.write('<p>The final price is: $' + priceWithDiscount + '</p>');
    }
}

function getPrice(){
    document.write(`<p>500</p>`)
}
