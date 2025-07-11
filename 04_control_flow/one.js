// if

// if(condition) { //content will bet evaluated if condition is true else not.}
// const balance = 1000;
// if( balance < 500) {
//     console.log("Less than 500");
// } else if(balance  < 750 ){
//     console.log("Less than 750");
// } else if(balance < 900)
// {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1500");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && loggedInFromGoogle)
{
    console.log("Allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allow");
}