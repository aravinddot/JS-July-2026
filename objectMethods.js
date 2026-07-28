


// const tool = {
//     name: "playwright",
//     age: 6,
//     company: "microsoft",
//     country: "USA"
// }

// tool.language = "javascript" // add a new property

// tool.name = "cypress" // update an existing property

// delete tool.company // delete an existing property

// console.log(tool);

// for(const key in tool) {
//     console.log(tool[key]);
    
// }


// for(const key of Object.keys(tool)) {
//     console.log(key);
    
// }

// for(const key of Object.values(tool)) {
//     console.log(key);
    
// }

// for(const key of Object.entries(tool)) {
//     console.log(key);
    
// }




// const tool = {
//     name: "playwright",
//     age: 6,
//     company: "microsoft",
//     country: "USA"
// }

// // Object.freeze(tool)

// // Object.seal(tool)

// tool.language = "javascript" // add a new property

// tool.name = "cypress" // update an existing property

// delete tool.company // delete an existing property

// console.log(tool);



const obj1 = {
    a: 10
}

const obj2 = {
    b: 20
}

const result = Object.assign(obj1, obj2)

console.log(result);
