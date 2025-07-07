// based on how data gets stored in the memory, the data types are divided into 2 categories - Primitve and Non-Primitve
// In primitve there are 7 types and they are all call by value (changes made in copy)---
// String, Number, Boolean, null, undefined, Symbol, BigInt
// Refernce Type (Non-primitve), Arrays, Objects, Functions

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// Arrays declartion---
const heros = ["Ironman","Spiderman","Thor","Captain America"];

// Objects are defined in {} with key-value pairs

let myObj = {
    name: "Priyal",
    age: 20,
}

// function, treating like a variable

const myFunction = function(){
    console.log("Hello World!");
}



