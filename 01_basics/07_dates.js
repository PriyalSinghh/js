let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toString());
// months start with  0 in JS.

let myNewDate = new Date(2023, 0, 23, 5, 3);
// console.log(myNewDate.toString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})














