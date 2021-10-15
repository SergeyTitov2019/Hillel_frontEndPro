
function callMe(a){
    if(a > 5){
        return callMe(0)
    } else {
        return a+1
    }
}

// console.log(callMe(8))

function factorial(value){
    if(value > 1){
        console.log('v:', value)
        return value * factorial(value-1)
    }
    console.log('v2:', value)
    return value
}

// console.log(factorial(8))


const user = {
    name: 'John',
    showName: function (){
        console.log(this.name)
    }
}
// user.showName()

function Person(){
    this.name = 'ivan';
    this.age = 10
}
const personObj = new Person()
console.log(personObj)

