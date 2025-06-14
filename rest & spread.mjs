// rest and spread operator

// syntax ...

// let { name, ...rest } = {
//   name: "ram",
//   age: 18,
//   address: "ktm",
// };
// console.log(name);
// console.log(rest);

// rest operator always place at last.

// let sum = (a, b, ...c) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(a + b + c);
// };
// sum(1, 2, 3, 4, 5);

// let [arr, ...a] = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(a);

let sub = (b, ...c) => {
  console.log(c);
};
sub(20, 10, 5);

let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
