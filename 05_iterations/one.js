// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop vale: ${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value: ${j}`);
//     }
// }

// let myArr = ["Batman", "Flash", "Superman"]
// console.log(myArr.length);

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

// break and continue keywords

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 detected");
        break;
    }
    
    console.log(`Value of i: ${i}`);
}
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("5 detected");
        continue;
    }
    
    console.log(`Value of i: ${i}`);
}