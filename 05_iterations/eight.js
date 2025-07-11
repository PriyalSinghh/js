// reduce

const arr = [1,2,3,4]

// const initialVal = 0
// const sumWithInitial = arr.reduce( function(accu, currval) {
//     console.log(`Accu: ${accu} and Currval ${currval}`);
//     return accu + currval
// }, 0)

const sumWithInitial = arr.reduce( (accu, curr) => accu + curr, 0)
// console.log(sumWithInitial);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "dev course",
        price: 5000
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const cartTotal = shoppingCart.reduce( (accu, item) => accu + item.price, 0)
console.log(cartTotal);


