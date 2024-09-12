// Stack (primitive), Heap (Non -primitive)
let myYoutube ="EntireGamer"
let anotherName=myYoutube;
anotherName="chaiaurcode"

console.log(myYoutube);
console.log(anotherName);

//Heaps using by reference
let userone={
    email: "user@gmail.com",
    upi: "sdhbgsh4543"
}
let usertwo=userone
usertwo.email="ankit@gmail.com"
console.log(userone.email);
console.log(usertwo.email);