// if
const isUserLoggedIn = true;
const temp=41
// if(temp === 41){
//     console.log("less than 50");
// }else{
//     console.log("temp is greater than 50")
// }
// <, >, <=, >=, ==, !=, ===

const score =200

// if(score > 100){
//     const p = "fly";
//     console.log(`User power: ${p}`);
// }
// console.log(`User power: ${p}`);  //error when we use const 


const userLoggedIn = true;
const debitCard =true;
const loggedInFromGoggle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if(loggedInFromGoggle || loggedInFromEmail){
    console.log("userLoggedIn");
}


const userEmail="ankit.com"
if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}

//falsy value
// false, 0, -0, BiInt On, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}

// const emptyObj={}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


//Terniary Operator
//condition ? true : false

const icePrice =100
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80")
