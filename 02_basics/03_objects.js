// Object.create();

const sym = Symbol("key1");

const user = {
    name: "Priyal",
    "fullName": "Priyal Singh",
    [sym]: "My Key",
    age: 20,
    loaction: "Hyderabad",
    email: "priyal@gmail.com",
    isLoggedIn: false,
    lastLogin: ["Monday","Tuesday"]
};


// console.log(user.email);
// console.log(user["email"]); --> in this access method we should provide the key values as string in this cas, else it will throw error.
// console.log(user["fullName"]);
// console.log(typeof user["sym"]); //the data type of this will be string not a symbol, to use this "sym" as a Symbol when declaring object use it in [sym].
// console.log(typeof user[sym]);
// console.log(user);
// Object.freeze(user);  //changes can not be made to this
// user.email = "priyal@chatgt.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello js user!");
}

// console.log(user.greeting());

user.greet2 = function() {
    console.log(`Hello ${this.name}!`);
}
console.log(user.greet2());




