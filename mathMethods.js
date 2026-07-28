

// console.log(Math.floor(4.9));


// console.log(Math.round(4.5));


// console.log(Math.max(10, 100, 50, 80));


// console.log(Math.min(10, 100, 50, 80));


// console.log(Math.random() * 1000);

// console.log(Math.floor(Math.random() * 10000));

// const num = Math.floor(Math.random() * 10000)

// console.log(`TestName-${num}`);



const chars = "ABCDEFGHIJKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuvwxyz"


let randomValue = ""

for(let i = 0; i < 20; i++) {
    randomValue += chars[Math.floor(Math.random() * chars.length)]
}

console.log(randomValue);
