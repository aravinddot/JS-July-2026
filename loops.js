
// Traditional loops

// 1) while,
// 2) do while
// 3) for loop


// Modern loops

// 1) For in
// 2) For of



// const automationTools = ['Playwright', 'cypress', 'selenium', 'night watch', 'puppeter', 'test cafe', 'qtp']

// for(const b in automationTools) {

//     console.log(a);
    
// }


// for(const a of automationTools) {

//     if(a == "Playwright") {
//         console.log(a);
        
//     }
    
// }



// for(let i = 0; i < 10; i++) {// 2 + 1
//     console.log(i);
    
// }



const automationTools = ['Playwright', 'cypress', 'selenium', 'night watch', 'puppeter', 'test cafe', 'qtp', 'Tosca']

for(let i = 0; i < automationTools.length; i++) {
   
    if(automationTools[i] == 'Playwright') {
        console.log(automationTools[i]);
        break;
        
    }
    
}


// let i = 0

// while(i < automationTools.length) {
//     console.log(automationTools[i]);
//     i++
// }




let i = 10

do{
    console.log(i);
    i++
    
}while(i == 10)


