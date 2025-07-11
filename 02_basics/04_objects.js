// const tinderUser = new Object(); singleton object
const tinderUser = {}; //non singletone object
tinderUser.id = "123abc";
tinderUser.name = "Priyal";
tinderUser.isLoggedIn = false; 
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Priyal",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {3: "a", 4:"b"}

// const obj3 = {obj1, obj2} this willl give objects only like elements
// const obj3 = Object.assign({}, obj1, obj2);  //{} will act as target, in which obj1 and obj2 will get copied

const obj3 = {...obj1, ...obj2}; //spread, it will be used mostly
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //datatype will be an array.
// console.log(Object.values(tinderUser)); //datatype will be an array
// console.log(Object.entries(tinderUser)); //array of array of key - values

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "JS",
    price: "999",
    courseInstructor: "Priyal",

}
// console.log(course.price); //we can not alywas call course.something something, it gets so messsy
const {courseInstructor : instructor, price: p, courseName: subject} = course;
// console.log(courseInstructor);
// console.log(instructor);
// console.log(p);
// console.log(subject);

// {
//     "name": "Priyal",
//     "courseName": "JS",
//     "price": "free"
// }.    /// this is json format

// [
//     {},
//     {},
//     {}
// ].  ////sometimes we get APIs in this format also instead of jSon












