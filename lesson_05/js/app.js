const box = document.getElementById('box')
const priceToGetDiscount = 3000;
const discountValue = 5;
const discountValueToCalculate = 1 - discountValue / 100;
const selectedCategory = document.getElementById("select");
const selectedItem = document.getElementById("input1");
const selectedAmount = document.getElementById("input2");
const formButton = document.querySelector('#btn-form')

let productNumber;
let productAmount;
const selectedProduct = products[productNumber-1];
const totalPrice = productAmount * selectedProduct.price;
formButton.addEventListener('click', btnClick)
getItem()
getAmount()
getPrice()
getDiscount()





