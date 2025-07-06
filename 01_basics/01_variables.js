const accountId = 144553
let accountEmail = "priyal@gmail.com"
var accountPasswrd = "12345"
accountCity = "Varanasi"
let accountState;

// accountId = 2 not allowed!!!
accountEmail = "hc@gmail.com"
accountPasswrd = "01010101"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use "var" because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPasswrd, accountCity,accountState]);
