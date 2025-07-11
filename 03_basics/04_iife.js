// Immediately Invoked Function Expressions (IIFE)
// We use iife to avoid data pollution from global variables and to connect some functions immediately.

(function one() {
    //named iife
    console.log("DB connected");
})(); //we must terminate this function with ; else it willl throw error

//with arrow function

((name) => {
    //un-named iife
    console.log(`DB connected to ${name}`);
})("Priyal");