const user = {
    userName: "Priyal",
    price: 199,
    welcomeMessage: function() {
        console.log(`${this.userName}, Welcome to website!`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.userName = "Sam";
// user.welcomeMessage();
// console.log(this);  //For this the current object is empty but for windows if you will inspect, it will be windows itself.

// function one() {
//     let username = "Priyal";
//     console.log(this.username); //it will throw undefined because we can not use "this" in function
    
// }

// one();

const coffee = () => {
    let username = "Priyal";
    console.log(this);
}
// coffee();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

// const addTwo = (num1, num2) => (num1 + num2); //This is implicit return, when there is only one statment in the function.
// const addTwo = (num1, num2) => {username: "Priyal"} //to return an object we need to use parenthesis
const addTwo = (num1, num2) => ({username: "Priyal"})
// console.log(addTwo(3,4));

// const arr = [2, 5, 7, 11]
// arr.forEach(function)
