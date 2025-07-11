// var c = 3000;
// let a  = 200;
// if(true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a); // a will print 200 that is the global one.
// console.log(b);
// console.log(c); 30 should also not be accessed outside but it is that is why we do not use this data type

function one() {
    const username = "Priyal";

    function two() {
        const website = "Youtube";
        console.log(username);
    }
    //function two can access allt he variables of function one but function one can not.
    // console.log(website);
    // two();
}
// one();

if(true) {
    const username = "Priyal";
    if(username === "Priyal") {
        const website = " Youtube";
        // console.log(username + website);
    }
    // console.log(website); //website is out of scope 
    
}
// console.log(username); // username is out of scope

// +++++++++++++ Interesting ++++++++++++++
function addOne(num) {
    return num + 1;
}
addOne(5);

const addtwo = function(num) { //addtwo is called expression here. We can not access addtwo before initialising it but we can call addone anywhere.
    return num + 2;
}
addtwo(5);

