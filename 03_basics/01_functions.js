// console.log("H");
// console.log("I");

function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("A");
    console.log("L");
}
// sayMyName() //sayMyName is refernce of the fxm and () is the execution
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    
    
}
// const result = addTwoNumbers(3,4);
// console.log("result :",result);

function logInUser(username = "sam")//sam will be the default value for this 
{
    if(!username){
        console.log("Please enter a username.");
        return;
    } 
    return `${username} just logged in.`
}

// console.log(logInUser("Priyal"));
// console.log(logInUser());

function calculateCartPrice(...num1) {
    return num1;
}
// console.log(calculateCartPrice(2)); //... is spread or rest operator, here it is rest. And it will give an array of results.
// console.log(calculateCartPrice(200, 400, 500, 1000));
function calculateCartPrice2(val1, val2, ...num1) {
    return num1;
}
// console.log(calculateCartPrice2(100, 200, 300, 400, 5000));
const user = {
    name: "Priyal",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     name: "Sam",
//     price: 399
// }
// );

const arr = [200, 400, 100, 600];
function handleArray(getArray) {
    return getArray[2];
}

// console.log(handleArray(arr));
// console.log(handleArray([200, 300, 500, 1000]));








