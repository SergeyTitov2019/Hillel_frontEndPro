/***********************************************************************************************************************
 *
 *                           home work # 8
 *
 * *********************************************************************************************************************/
const box = document.getElementById('box')
const box2 = document.getElementById('box2')
const priceToGetDiscount = 5000;
const discountValue = 5;
const discountValueToCalculate = 1 - discountValue / 100;

function showProductList() {
    for (let i = 0; i < products.length; i++) {
        console.log("Product №" + (i + 1) + products[i].name)
    }
}

// showProductList()

function getCategory() {
    let category = []
    let productsByCategory = []
    for (let i = 0; i < products.length; i++) {
        category.push(products[i].category)
    }
    let categorySet = new Set([...category])
    category = [...categorySet]
    do {
        productCategory = parseInt(prompt('Please enter the category number (from 1 to ' + category.length + '):'));
    } while (!(productCategory > 0 && productCategory <= category.length));

    for (let i = 0; i < products.length; i++) {
        if (productCategory === products[i].category) {
            productsByCategory.push(products[i])
        }
    }
    return productsByCategory
}

const productsByCategory = getCategory()
console.log('category:', productsByCategory)

function getProductNumber() {
    let productNumber;
    do {
        productNumber = parseInt(prompt('Please enter the product number (from 1 to ' + productsByCategory.length + '):'));
    } while (!(productNumber > 0 && productNumber <= productsByCategory.length));
    return productsByCategory[productNumber - 1]
}

const selectedProduct = getProductNumber();

function getAmount() {
    let productAmount;
    do {
        productAmount = parseInt(prompt('Please enter the product amount (from 1 to ' + selectedProduct.count + '):'));
    } while (!(productAmount > 0 && productAmount <= selectedProduct.count));
    return productAmount
}

const productAmount = getAmount()

function priceCalculation(amount, price) {
    const priceObj = {
        totalPrice: amount * price,
    }
    if (priceObj.totalPrice > priceToGetDiscount) {
        priceObj.priceWithDiscount = priceObj.totalPrice * discountValueToCalculate
    }
    return priceObj;
}

function getNotification(obj) {

    box.innerHTML = `
            <div class="box-content"><h5>You have chosen:</h5> <span>${selectedProduct.name}</span> </div>
            <div class="box-content"><h5>In amount of :</h5> <span>${`${productAmount} pcs`}</span> </div>
            <div class="box-content"><h5>The price of your order is:</h5> <span>${`$ ${obj.totalPrice.toLocaleString()}`}</span> </div>
`
    if (obj.priceWithDiscount) {
        box2.innerHTML = `
            <div class="box-content"><h5>You will get the discount :</h5> <span>${`${discountValue} %`}</span> </div>
            <div class="box-content"><h5>The total to be paid is:</h5> <span>${`$ ${obj.priceWithDiscount.toLocaleString()}`}</span> </div>
`
    }
}

const priceObj = priceCalculation(productAmount, selectedProduct.price)
getNotification(priceObj)
