// //split and join
// let name = "alishshakyashrestha";

// console.log(name.split(" "));

// let name = ["alish", "shakya", "shrestha"];
// console.log(name.join(" "));

// filter => filter((value, index) =>{})
// let list = [1, 5, 7, 8, 2];
// let output = list.filter((value, index) => {
//   if (value > 5) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let names = ["ram", "ari", "shyam"];

// let output = names.filter((value, index) => {
//   if (value.length > 4) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(output);

// let input = [1, 2, 3, "a", "b", "c", 0, null, undefined, true, false];

// console.log(input.filter(Boolean));

// map = [1,2,3] = [2,4,5] = returned modified value
// filter = [1,2,3] = [2,3] = returned only true or false

// find = find((value,index) =>{})
// find only return the first matched value
let list = [1, 20, 3, 44, 4];
let output = list.find((value, index) => {
  if (value > 20) {
    return true;
  } else {
    return false;
  }
});
console.log(output);
