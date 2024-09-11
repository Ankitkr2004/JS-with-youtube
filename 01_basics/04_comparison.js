// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// the raeson is that an equality check == and comparisons < > >= <= 
// work differently .
// Comparisons convert null to a number treating it as 0.
// That's why null >= 0 is true ans null > 0 is false.

console.log(undefined == 0);//false
console.log(undefined <= 0);//false
console.log(undefined > 0);//false
console.log(undefined >= 0);//false

// === 
console.log(2 === 2);//true
console.log("2" === 2);//false
console.log("2" == 2);//true