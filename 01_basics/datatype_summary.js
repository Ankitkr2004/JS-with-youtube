// primitive datatype
// 7 types: string, number, boolean, null, undefined, symbol, Bigint

const score=100
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null// Object
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 3466324876347647637463n // Bigint


//Reference (Non - primitive)
// Array, Objects, Functions
const heros= ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "ankit",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof anotherId);
/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/