

// const automationTools = ['Aravind', 'Purusothaman', 28, 'Coimbatore', 'TN', 641031]


// const [fname, lname, ...remainingValues] = automationTools

// console.log(fname);

// console.log(lname);

// console.log(remainingValues); // rest parameter


// console.log(...automationTools) // spread operator

// rest parameter

// function printValues(...values) {
    
//     console.log(values);

// }


// printValues(10, 20, 30, 40, 50)

const value = [ 10, 20, 30, 40, 50 ]

function getValues(...values) {

    // console.log(a);

    // console.log(b);

    // console.log(c);

    // console.log(d);

    // console.log(e);

    console.log(values);
}

getValues(...value) // spread operator