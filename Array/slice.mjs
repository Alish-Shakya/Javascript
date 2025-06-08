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

// let list = [1, 22, 5, 7, 20, 2];
// let output = list
//   .filter((value) => {
//     if (value % 2 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   .reduce((previous, current) => {
//     return previous + current;
//   }, 0);
// console.log(output);

// let array = [1, 44, 66, 45, 31, 3, 5, 67, 90, 100, 12, 18];
// let output = array.filter((value, index) => {
//   if (value % 2 === 0) {
//     return false;
//   } else {
//     return true;
//   }
// });
// // console.log(output);

// let finaloutput = output.reduce((previous, current) => {
//   return previous + current;
// }, 0);

// console.log(
//   `The odd number of given array list are: ${output}.
// and the sum of those output are ${finaloutput}`
// );

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = a
  .filter((value, index) => {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  })

  .find((value, index) => {
    if (value > 5 || value > 8) {
      return true;
    } else {
      return false;
    }
  });
console.log(b);
//   .reduce((previous, current) => {
//     return previous + current;
//   }, 0);

// console.log(b);
