function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}
// sayMyName()

function addTwoNUmber(n1,n2){
    // let res=n1+n2;
    // return res //return ke baad kuch print nhi hoga func me
    return n1+n2;
}
const res=addTwoNUmber(3,5)
// console.log("result: ",res)  //undefined


function login(username="ankit"){
    if(!username){
        console.log("please enter username: ");
        return
    }
    return `${username} just logged in`
}
// console.log(login("ankit"))
// console.log(login("coder"))



function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
const user={
    username: "ankit",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "ankit",
    price: 399
})

const mynewArray=[200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

