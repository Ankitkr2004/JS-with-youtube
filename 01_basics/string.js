const name="ankit"
const repoCount=50

// console.log(name + repoCount + "value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('minecraft')
const Gname=new String('mine-cra-ft')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('m'));

const newString = Gname.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne="   ankit   "
console.log(newStringOne)
console.log(newStringOne.trim());

const url= "https://ankit.com/ankit%20kumar"
console.log(url.replace('%20', '-'))

console.log(url.includes("ankit"))
console.log(Gname.split('-'));