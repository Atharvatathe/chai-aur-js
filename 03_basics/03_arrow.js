// "this" keyword le current context laai vanxa

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {             // EXPLICIT RETURN --> curly bracket use gareko xa bhane return lekhnai parxa
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2      // implicit return --> A function is returned values without using the return keyword, it's called an implicit return.

// const addTwo = (num1, num2) => ( num1 + num2 )       // react maa yo dherai use hunxa

const addTwo = (num1, num2) => ({username: "hitesh"})      // object laai implicit return gareko


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

/* Normal Functions:
this is dynamically bound to the object that calls the function. 
The value of this depends on how the function is invoked (e.g., as a method, standalone function, or constructor). 
In an object method, this refers to the object itself. 
In a standalone function, this often refers to the global object (e.g., window in a browser) or undefined in strict mode. */

/* Arrow Functions:
this is lexically bound, meaning it takes its value from the surrounding context where the arrow function is defined. 
Arrow functions do not have their own this binding; they inherit it from their surrounding scope. 
If an arrow function is defined within an object method, this will still refer to the global object (or undefined in strict mode), even if the method is called on the object. 
Arrow functions are often used in callbacks and event listeners, where the surrounding context is often the window object or a specific element. */
