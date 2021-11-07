const finalInfo = document.getElementById('final-note')
const finalInfoBtn = finalInfo.children[1]


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
    wrapper.appendChild(nameElement)

    const priceElement = document.createElement('div');
    priceElement.textContent = `$ ${products.price.toLocaleString()}`
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
    buyBtn.addEventListener('click', e => buyClick(finalInfo, wrapper.parentElement))
    // finalInfoBtn.addEventListener('click', e => finalInfo.classList.add('invisible'))
    finalInfoBtn.addEventListener('click', e => document.location.reload())



}

function buyClick(showNote, removeNote){
    showNote.classList.remove('invisible')
    removeNote.classList.add('invisible')
}




