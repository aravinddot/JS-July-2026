

// // 1) Primitive data types
// // 2) non primitive data type or reference data type


// // 1) Primitive

// /*

// 1) string
// 2) number
// 3) boolean
// 4) null
// 5) undefined

// */



// // 1) string

// const automationTool = "playwright"

// console.log(automationTool);

// // number

// const num = 50.12

// console.log(num);


// // boolean 

// const isPopular = false

// console.log(isPopular);

// // null

// let nullDataType = null

// //nullDataType = "cypress"

// console.log(nullDataType);


// // undefined 

// let unDefinedDataType = undefined;

// unDefinedDataType = "cy"

// console.log(unDefinedDataType);


// non primtive data type

// 1) array
// 2) object
// 3) function


//            0             1  2      3                     4
// const arr = ["playwright", 6, true, ["microsoft", "USA", [undefined, null]], "Cypress"]
//                                         //0         1
// console.log(arr[3][1], arr[3][2][0]);
// console.log(arr[2]);



// const obj = {
//     name: "playwright",
//     age: 6,
//     isPopular: true,
//     info: {
//         ownedBy: "microsoft",
//         country: "USA"
//     }
// }

// // dot notation

// console.log(obj.info.ownedBy);

// // bracket notation

// console.log(obj['name'], obj['age']);



// function

// resuse

function printValues() {
    console.log("playwright");
}

printValues()

printValues()

printValues()
