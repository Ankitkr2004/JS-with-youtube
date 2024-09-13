//Dates
let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



// let myCreateDate= new Date(2023, 0, 23)
// console.log(myCreateDate.toDateString());

// let myCreateDates= new Date(2023, 0, 23, 5, 3)
// console.log(myCreateDates.toLocaleString());

// let myCreateDatess= new Date("01-12-2023")
// console.log(myCreateDatess.toLocaleString());



// let mydate = new Date("01-12-2023");
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(mydate.getTime());
// console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})