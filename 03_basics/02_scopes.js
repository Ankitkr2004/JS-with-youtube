var c=900
let a=300
if(true){
    let a=10
    const b=20
    // console.log("inner: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "ankit"
    function two(){
        const website ="Youtube"
        console.log(username)
    }
    // console.log(website);  // error
    two()
}
// one()

if(true){
    const username ="ankit"
    if(username === "ankit"){
        const website ="youtube"
        // console.log(username + website);
    }
    // console.log(website) //error
}
// console.log(username); //error


//-----------interesting---------------

console.log(addone(5)) 
function addone(num){
    return num + 1
}



// console.log(addTwo(5))  //error due to const using to declare function
const addTwo=function(num){
    return num+2
}