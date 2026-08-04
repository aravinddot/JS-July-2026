
// sync by nature
// single threaded
// one task at a time

// sync example

// console.log("task 1");

// console.log("task 2");

// console.log("task 3");


// async example

// console.log("task 1");

// setTimeout(() => {
//     console.log("task 2");
// }, 5000)

// console.log("task 3");



// function getApiValues() {
//     const response = fetch('https://automationexercise.com/api/productsList').then((res)=> {
//         return res.json()
//     })
//     response.then((data)=> {
//        console.log(data)
//     })
// }


// getApiValues()



async function apiCall() {
    const response =  await fetch('https://automationexercise.com/api/productsList')
    const data = await response.json()
    console.log(data)
}

apiCall()