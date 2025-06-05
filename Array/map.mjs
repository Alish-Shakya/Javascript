//map: syntax: map ((value, index) =>{})

// let list = [1, 2, 3, 4];

// let output = list.map((value, index) => {
//   return value * 2;
// });
// console.log(output);

// let list = [1, 2, 3, 4];
// let output = list.map((value, index) => {
//   return 5;
// });
// console.log(output);
//  use map method if both input and output array and both input and output length are same

// ["my", "name", "is"] = ["My" "Name" "Is"]

// let list = ["my", "name", "is"];
// let output = list.map((word) => {
//   let result = "";
//   for (let i = 0; i < word.length; i++) {
//     if (i === 0) {
//       result += word[i].toUpperCase();
//     } else {
//       result += word[i].toLowerCase();
//     }
//   }
//   return result;
// });

// console.log(output);

let list = [1, 2, 3, 5];
let output = list.map((value) => {
  if (value % 2 === 0) {
    return value * 0;
  } else {
    return value * 100;
  }
});
console.log(output);
