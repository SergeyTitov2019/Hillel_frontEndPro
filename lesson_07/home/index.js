const box = document.getElementById('box')
function Person(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName;
    this.age = age;
     this.getPerson = () => {
        return `${this.firstName} ${this.lastName}`
    };
}

const firstNameFromUser = prompt('Type your first name')
const lastNameFromUser = prompt('Type your last name')
const ageFromUser = parseInt(prompt('Type your age'))

const registeredPerson = new Person(firstNameFromUser, lastNameFromUser, ageFromUser)

function Car(brand, type, year, owner){
    this.brand = brand
    this.type = type;
    this.year = year;
    this.age = new Date().getFullYear() - year;
    this.owner = owner;
    this.getCar = () => {
        return `Car Brand: ${this.brand} Car Type: ${this.type} Age: ${this.age} `
    };
}

const brandFromUser = prompt('Type your car brand')
const typeFromUser = prompt('Type your car type')
const carYearFromUser = parseInt(prompt('Type your car year'))

const registeredCar = new Car(brandFromUser, typeFromUser, carYearFromUser, registeredPerson.getPerson())

function layout(){
    box.innerHTML = `
          <div class="box-content"><h5>Car brand:</h5> <span>${registeredCar.brand}</span> </div>
          <div class="box-content"><h5>Car type:</h5> <span>${registeredCar.type}</span> </div>
          <div class="box-content"><h5>Car age:</h5> <span>${registeredCar.age}</span> </div>
          <div class="box-content"><h5>Car owner:</h5> <span>${registeredCar.owner}</span> </div>
    `
}

layout()