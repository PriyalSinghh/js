// const userEmail = "p@gmail.com"

// if(userEmail) {
//     console.log("User Email");
// } else{
//     console.log("Do not have user email");
// } //empty array gives true while empty string results false

// falsy values are -----
// false, 0, -0, BigInt 0n, "", null, undefined, NaN. else all are truthy vales.

// Truthy vales
// "0", [], "false", " ", {}, function(){}, 

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty.");
    
// }

// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10 // checks safety for null values.
// val1 = undefined ?? 15;
// console.log(val1);

// val1 = null ?? 10 ?? 15;
// console.log(val1);

// Ternary operator 
// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80");

