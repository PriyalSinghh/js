const heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Batman", "Superman", "Flash"];

heros.push(dc_heros);
// console.log(heros); This will not merge the arrays but it will take the entire dc_heors as a element because js array can take different data types.

const arr = heros.concat(dc_heros);
// console.log(arr);
// concat joins two or more arrays and results in a new arrya without modifying the original one.

const newArr = [...heros, ...dc_heros];
// console.log(newArr);
// This spreads the array elements individually. 

const arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realArr = arr2.flat(Infinity);
// console.log(realArr);

// console.log(Array.isArray("Priyal"));
// console.log(Array.from("Priyal"));
// console.log(Array.from({name: "Priyal"})); ----> this will give an empty array because we have not mentioned that either keys or values can be transformed to array.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));








