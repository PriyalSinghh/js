const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = nums
                .map( (val) => val * 10 )
                .map( (val) => val + 1 )
                .filter( (val) => val >= 40 )
// const addedTen = nums.map( (val) => val + 10)
console.log(newNums);
// here also if we are not using {}, no need of return keyword.

