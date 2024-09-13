const marvel=["thor", "iron man", "spider man"]
const dc=["superman", "flash", "batman"]
// marvel.push(dc);
// console.log(marvel);
// console.log(marvel[3][1]);

// const all_hero=marvel.concat(dc)
// console.log(all_hero);


// const all_new=[...marvel, ...dc] //spread operator same work as concat
// console.log(all_new);


const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array=another_array.flat(Infinity)
console.log(real_array)

console.log(Array.isArray("Ankit"))
console.log(Array.from("Ankit"))
console.log(Array.from({name: "ankit"}))//interesting in interview(print empty array)



let score1=100;
let score2=300;
let score3=500;
console.log(Array.of(score1, score2, score3));



