//array
const myArr=[0,1,2,3,4,5]
const myHeros=["iron man", "thor"]
const myArr2= new Array(1,2,3,4)
console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)   // first me 1 value aega or shift hoga
// myArr.shift()  // ek baar shift hokar print hoga
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



//slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)//range 1 to 2(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)//range 1 to 3(1,3)
console.log(myn2);
console.log("C ", myArr);




