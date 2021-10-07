/**********************************************************************************************************
 *
 *                                                        01
 *
 ************************************************************************************************************ */

function classPractise01(a, b) {
    if (a > b) {
        console.log('1:', 'number a is bigger')
    } else if (b > a) {
        console.log('1:', 'number b is bigger')
    }
}

classPractise01(8, 6)

/**********************************************************************************************************
 *
 *                                                        02
 *
 ************************************************************************************************************ */

function classPractise02(km, foots) {
    if (km * 1000 > foots * 0.305) {
        console.log('2:', 'length in km is bigger')
    } else {
        console.log('2:', 'length in foots is bigger')
    }
}

classPractise02(2, 3000)

/**********************************************************************************************************
 *
 *                                                        03
 *
 ************************************************************************************************************ */

function classPractise03(a, b) {
    if (a === b) {
        console.log('3:', 'B and A are equal')
    } else if (a % b === 0) {
        console.log('3:', 'B is A divider')
    } else if (b % a === 0) {
        console.log('3:', 'A is B divider')
    } else{
        console.log('3:', 'B is not A divider and A is not B divider')
    }
}

classPractise03(10, 50)
/**********************************************************************************************************
 *
 *                                                        04
 *
 ************************************************************************************************************ */

function classPractise04(a) {

    if (a % 2 === 0) {
        console.log('4', 'Last num is Even!', 'last digit is:', a % 10)
    } else  {
        console.log('4', 'Last num is Odd!', 'last digit is:', a % 10 )
    }
}
classPractise04(771515151515)

/**********************************************************************************************************
 *
 *                                                        05
 *
 ************************************************************************************************************ */

function classPractise05(num) {
    let a = (num - num % 10)/10
    let b = num % 10
    if(a > b){
        console.log('5', 'First digit is bigger:', a)
    } else if (a < b){
        console.log('5', 'Second digit is bigger:', b)
    } else {
        console.log('5', 'Digits are equal:', a, b)
    }
}
classPractise05(21)

/**********************************************************************************************************
 *
 *                                                        06
 *
 ************************************************************************************************************ */

function classPractise06(num) {

    let arr = [...num + ''].map(i => +i)
    let sum = arr[0] + arr[1] + arr[2]
    let mult = arr[0] * arr[1] * arr[2]

    if(sum % 2 === 0){
        console.log('6,a:', 'Yes. Sum is Even')
    } else {
        console.log('6,a:', 'Nope. Sum is Odd')
    }
    if(sum % 5 === 0){
        console.log('6,b:', 'Yes. Sum can be divided into 5')
    } else {
        console.log('6,b:', 'Nope. Sum can not be divided into 5')
    }
    if(mult > 100){
        console.log('6,c:', 'Yes. Multiplication of digits more than 100')
    } else {
        console.log('6,c:', 'Nope. Multiplication of digits less than 100')
    }

}
classPractise06(222)

/**********************************************************************************************************
 *
 *                                                        07
 *
 ************************************************************************************************************ */

function classPractise07(num) {

    let arr = [...num + ''].map(i => +i)

    if(arr[0] === arr[1] && arr[0] === arr[2] && arr[1] === arr[2]){
        console.log('7,a:', 'Yes. All digits of the num are equal')
    } else {
        console.log('7,a:', 'Nope. Digits of the num are NOT equal')
    }
    if(arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]){
        console.log('7,a:', 'Yes. Some digits of the num are equal')
    } else {
        console.log('7,a:', 'NO equal digits')
    }

}
classPractise07(555)

/**********************************************************************************************************
 *
 *                                                        08
 *
 ************************************************************************************************************ */

function classPractise08(num, num2) {
    let str = num.toString().split('').map(i => +i)
    let str1 = num2.toString()
    let arr = [...str, ...str1]

    console.log('str:', str)

    let firstPart = parseInt(arr[0] + arr[1] + arr[2])
    let secondtPart = parseInt(arr[5] + arr[4] + arr[3])
    if(firstPart === secondtPart){
        console.log('8:', 'Yes, the num can be reflected')
    } else{
        console.log('8:', 'Nope, the num can not be reflected')
    }
}
classPractise08(125487, 555)


// const arr555 = [25,25,88,89]
// const ress = arr555.reduce((acc, cur) => acc = cur % 5 === 0 ? acc+ cur : acc, 0  )
// const resss = arr555.reduce((acc, cur) => {
//     if(cur % 5 === 0){
//         return acc += cur
//     } else {
//         return acc
//     }
// }, 0 )
//
// console.log('res:', ress)
