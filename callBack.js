


// function add(value) {
//     return value + 10;
// }


// // console.log(add(10))

// // const result = add(20)

// // console.log(result)


// function print(callBack) {
//     const result = callBack(20)
//     console.log(result);
// }


// print(add)





function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}



const result = calculate(10, 20, mul)

console.log(result)




