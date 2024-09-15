const user={
    username: "ankit",
    price : 100,
    welcomeMess: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }

}
// user.welcomeMess()
// user.username="ank"
// user.welcomeMess()
// console.log(this)


// function chai(){
//     console.log(this);
// }
// chai()


// const chai=function(){
//     let username ="ankit"
//     console.log(this.username);
// }
// chai()


// const chai= () => {
//     let username ="ankit"
//     console.log(this);
// }
// chai()


// const addTwo = (n1,n2) => {
//     return n1+n2;
// }

// const addTwo = (n1,n2) =>  n1+n2 //implicit return 
// const addTwo = (n1,n2) =>  (n1+n2) //implicit return 
const addTwo = (n1,n2) =>  ({username: "ankit"})  //explicit

console.log(addTwo(3,4))


const myArray =[2,3,4,7,8]
myArray.forEach()
