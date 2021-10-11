/*
const products = [
    {
        name: 'iPhone 13',
        count: 10,
        price: 2000,
    },
    {
        name: 'Samsung S20',
        count: 5,
        price: 1900,
    },
    {
        name: 'Shotgun',
        count: 100,
        price: 500,
    },
    {
        name: 'Samsung Buds',
        count: 10,
        price: 300,
    },
];
const priceToGetDiscount = 15000;
const discountValue = 5;
const discountValueToCalculate = 1 - discountValue / 100;

// Show list of products
console.log('List of products:');
for (let i = 0; i < products.length; i++) {
    console.log('Product #' + (i + 1) + ': ' + products[i].name);
}

// Get product number from user

let productNumber;

do {
    productNumber = parseInt(prompt('Please enter the product number (from 1 to ' + products.length + '):'));
} while (!(productNumber > 0 && productNumber <= products.length));

const selectedProduct = products[productNumber-1];

// Get product amount from user
let productAmount;
do {
    // if (productAmount !== undefined) {
    //   alert('You entered the wrong amount. Try again!');
    // }
    productAmount = parseInt(prompt('Please enter the product amount (from 1 to ' + selectedProduct.count + '):'));
} while(!(productAmount > 0 && productAmount <= selectedProduct.count));

// Price calculation
const totalPrice = productAmount * selectedProduct.price;
document.write('<p>The price of your order is: $' + totalPrice + '</p>');

// Discount calculation
if (totalPrice > priceToGetDiscount) {
    const priceWithDiscount = totalPrice * discountValueToCalculate;
    document.write('<p>You will get the discount ' + discountValue + '%</p>');
    document.write('<p>The final price is: $' + priceWithDiscount + '</p>');
}

*/
