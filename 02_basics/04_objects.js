//const tinderUser=new Object()
const tinderUser ={}
tinderUser.id= "123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    email: "ankitkumar72378@de.com",
    fullname: {
        userfullname: {
            firstname: "ankit",
            lastname: "kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname);



const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}
const obj4= {5: "a", 6: "b"}
// const obj3= {obj1, obj2}
// const obj3=Object.assign({}, obj1, obj2, obj4)
const obj3={...obj1,...obj2}
// console.log(obj3);


const users =[
    {
    id: 1,
    email: "shghdh@gmai.com"
    },
    {
    id: 2,
    email: "shghdh@gmai.com"
    },
    {
    id: 3,
    email: "shghdh@gmai.com"
    },
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course={
    coursename: "js is hindi",
    price: "999",
    courseInstructor: "ankit"
}
// course.courseInstructor
const {courseInstructor: instructor} = course 
// console.log(courseInstructor);
console.log(instructor);


//JSON API
// {
//     "name": "ankit",
//     "coursename"="js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

