

//const automationTools = ['Playwright', 'cypress', 'selenium', 'night watch', 'puppeter']


// array.push() - add values in last of an array

// automationTools.push("Test cafe", "QTP")

// console.log(automationTools);


// array.pop() - remove last values of an array

// automationTools.pop()

// console.log(automationTools);


// array.unshift() 

// automationTools.unshift("Test cafe", "QTP")

// console.log(automationTools);


//array.shift()

// automationTools.shift()

// console.log(automationTools);




// const automationTools = ['Playwright', 'cypress', 'selenium', 'night watch', 'puppeter']


// array.includes()

// console.log(automationTools.includes('Cypress'));

// array.indexOf()

// console.log(automationTools.indexOf('cypress'));

// const tools = ["test cafe", "QTP", "Tosca"]

//array.concat()

// const result = automationTools.concat(tools, "new value")

// console.log(result);

// array.reverse()

// console.log(automationTools.reverse());

// array.flat()

// const num = [22, 33, [44, 55, [6, [7, 8, [12, [15, 16, [30]]]]]]]


// console.log(num.flat(Infinity));


// const automationTools = ['Playwright', 'cypress', 'selenium', 'night watch', 'puppeter']

//array.forEach()


// automationTools.forEach((value, index, array)=> {
//     console.log(value, index, array);
    
// })



//const automationTools = ['Playwright', 'cypress', 'selenium', 'night watch', 'puppeter', 'test cafe', 'QTP']

//array.slice(startIndex, endIndex) - 

// console.log(automationTools.slice(5, 7));

//array.splice(startIndex, delete count, add values)

// automationTools.splice(2, 0, "tosca", "jmeter")

// console.log(automationTools);


//array.map()

//const num = [10, 20, 30, 40, 50]

// const result = num.map(v => v * 10)

// console.log(result);

//array.filter()

// const result = num.filter(val => val > 25)

// console.log(result);


// array.find()

// const result = num.find(val => val > 25)

// console.log(result);


// const num = [15, 18, 50, 44, 88, 100]


// array.every()

// const result = num.every(val => val > 15)

// console.log(result);

// array.some()

// const result = num.some(val => val > 99)

// console.log(result);


// array.findIndex()

// const result = num.findIndex(val => val > 25)

// console.log(result);




const num = [15, 44, 50, 10, 88, 100]

//array.sort()

// const result = num.sort((a, b) => a - b)

// console.log(result);


// array.reduce()

// const result = num.reduce((acc, curr) => acc + curr, 0)

// console.log(result);

//array.isarray()

// console.log(Array.isArray(num));


const automationTools = ['Playwright', 'cypress', 'selenium', 'night watch', 'puppeter', 'test cafe', 'QTP']

// console.log(automationTools.join(','));


//array.keys()

for(const val of automationTools.keys()) {
    console.log(val);
    
}

for(const val of automationTools.values()) {
    console.log(val);
    
}


for(const val of automationTools.entries()) {
    console.log(val);
    
}



































