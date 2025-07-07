const name = "Priyal";
const repoCount = 50;

// console.log(name + repoCount); this is outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another method to declare string using object is---

const gameName = new String("Priyal-Singh");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('P'));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(0,4);
// console.log(anotherString);
// You can also give negative numbers in slice unlike substring.

const namee = "  Priyal  ";
// console.log(namee);
// console.log(namee.trim());

const url = "https://priyal.com/priyal%20singh";
// console.log(url.replace("%20","-"));
// console.log(url);
// console.log(url.includes("priyal"));

const gamee = "Priyal-Singh-IIITA-FinalYearStudent";
console.log(gamee.split('-'));













