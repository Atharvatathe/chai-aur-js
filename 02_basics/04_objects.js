// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)     // naya object return gariraako xau bhane suruko laai empty object didaa raamro. kinaki suruko empty object target hunxa ra aru source hunxa

const obj3 = {...obj1, ...obj2}     // spread operator  - yo dherai use hunxa
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {courseInstructor: instructor} = course       // de-structure gareko. "courseInstructor" ko saato aba "instructor" lekhna milxa.

// console.log(courseInstructor);
//console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


//shallow copy and deep copy
//1. shallow copy

// let original = {
//     name: "Alice",
//     address: {
//         city: "New York"
//     }
// };

// console.log("Original object before shallow copy:", original);

// let shallowCopyObject = original;
// shallowCopyObject.name = "Alice jane"
// shallowCopyObject.address.city = "London"

// console.log("Original object after shallow copy:", original);
// console.log("shallow copp object:", shallowCopyObject);

//1. Deep copy

let originalDeep = {
    name: "Alice",
    address: {
        city: "New York"
    }
};

console.log("Original object before deep copy:", originalDeep);

let deepCopyObject = JSON.parse(JSON.stringify(originalDeep));
deepCopyObject.name = "Alice jane"
deepCopyObject.address.city = "London"

console.log("Original object after deep copy:", originalDeep);
console.log("deep copy object:", deepCopyObject);

// fake api resource :-  randomusermeapi
// Api bujhna laai time spend garna parxa tesko laagi pani site xa:  json formatter