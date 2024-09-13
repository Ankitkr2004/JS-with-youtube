//singleton
//object literals

const mySym=Symbol("keyl")


const JsUser = {
    name: "ankit",
    "full name": "Ankit Kumar",
    [mySym]: "mykey1",
    age: 20,
    location: "Bokaro",
    email: "ankitbokarogoogle.com",
    isLoggedIn: false,
    lastLoginDay: ["monday","tuesday"]
}

console.log(JsUser.email)//old way
console.log(JsUser["email"])//correct way and new
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);



JsUser.email="ankitgoogle.in"
// Object.freeze(JsUser)
JsUser.email="ankitmicrosoft.com"
// console.log(JsUser);



JsUser.greeting=function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting);//function return back
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
