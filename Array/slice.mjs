// let list = [1, 2, 3, 4, 5, 6];
// console.log(list.slice(2, 5)); //end index index is also included in array

// find the sum of all elements of an array.
// find the sum of all even elements of an array
// [1,22,5,7,20,2]

// let list = [1, 22, 5, 7, 20, 2];
// let output = list.filter((value, index) => {
//   if (value % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// // console.log(output);
// let finalValue = output.reduce((previous, current) => {
//   return previous + current;
// }, 0);
// console.log(finalValue);

let list = [1, 22, 5, 7, 20, 2];
let output = list
  .filter((value) => {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })
  .reduce((previous, current) => {
    return previous + current;
  }, 0);
console.log(output);
