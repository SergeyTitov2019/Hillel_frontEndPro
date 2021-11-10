const infoForm = document.getElementById('form-container')
const finalInfo = document.getElementById('final-note')
const finalInfoBtn = finalInfo.children[1]
const formElment = document.getElementById('form-container')
const btnSendInfo = document.getElementById('button-send')
const orderInfoForm = document.getElementById('order-info')
const infoSummary = document.getElementById('order-info')
const btnConfirmInfo = document.getElementById('button-сonfirm')

let name = infoSummary.children[0].getElementsByTagName('span')[0]
let post = infoSummary.children[1].getElementsByTagName('span')[0]
let city = infoSummary.children[2].getElementsByTagName('span')[0]
let goods = infoSummary.children[3].getElementsByTagName('span')[0]
let amount = infoSummary.children[4].getElementsByTagName('span')[0]
let sum = infoSummary.children[5].getElementsByTagName('span')[0]

let valueObj = {
    name: '',
    postNum: '',
    city: '',
    paymentForm: '',
    numberOfCommodities: null,
    product: '',
    price: '',
}


function showCategories(){
    const wrapper = document.getElementById('categories');

    for (let i = 0; i < categories.length; i++) {
        const child = document.createElement('div');
        child.classList.add('category');
        child.setAttribute('data-category-index', i)
        child.textContent = categories[i].name;
        wrapper.appendChild(child)
        child.addEventListener('click',  showProducts)
    }

}

function showProducts(event){
    const categoriesIndex = event.target.getAttribute('data-category-index')

    const products = categories[categoriesIndex].product;
    const wrapper = document.getElementById('products');
    wrapper.innerHTML = ''

    for (let i = 0; i < products.length; i++) {
        const child = document.createElement('div');
        child.classList.add('product')
        child.textContent = products[i].name
        wrapper.appendChild(child)
        child.addEventListener('click', e => showProductsInfo(i, categoriesIndex))
    }

}

function showProductsInfo(productIndex, categoriesIndex){

    const products = categories[categoriesIndex].product[productIndex];
    const wrapper = document.getElementById('prodDetails');
    wrapper.classList.add('info-block')
    wrapper.innerHTML = ''

    const nameElement = document.createElement('div');
    nameElement.textContent = products.name
    valueObj.product = products.name
    wrapper.appendChild(nameElement)

    const priceElement = document.createElement('div');
    priceElement.textContent = `$ ${products.price.toLocaleString()}`
    valueObj.price = products.price
    wrapper.appendChild(priceElement)

    const infoElement = document.createElement('div');
    infoElement.textContent =  products.info
    infoElement.setAttribute('class', 'info');
    wrapper.appendChild(infoElement)

    const buyBtn = document.createElement('button');
    buyBtn.setAttribute('class', 'btn btn-outline-secondary');
    buyBtn.setAttribute('type', 'button');
    buyBtn.innerText = 'Buy';
    wrapper.appendChild(buyBtn)
    buyBtn.addEventListener('click', e => buyClick(infoForm, wrapper.parentElement))
}


btnSendInfo.addEventListener('click', function (e){
    e.preventDefault()
    removeByClick(orderInfoForm, formElment)

})

function buyClick(showNote, removeNote){
    showNote.classList.remove('invisible')
    removeNote.classList.add('invisible')
}


function removeByClick(showNote, removeNote){
    showNote.classList.remove('invisible')
    removeNote.classList.add('hide')
    name.innerHTML = formElment[0].value
    post.innerHTML = formElment[1].value
    city.innerHTML = formElment[2].value
    amount.innerHTML = formElment[4].value
    goods.innerHTML = valueObj.product
    sum.innerHTML =` $ ${(valueObj.price * formElment[4].value).toLocaleString()}`

    }

btnConfirmInfo.addEventListener('click', confirmClick)

function confirmClick(){
    orderInfoForm.classList.add('invisible')
    finalInfo.classList.remove('invisible')
    finalInfoBtn.addEventListener('click', e => document.location.reload())

}




