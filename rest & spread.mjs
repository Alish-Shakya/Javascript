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

let [arr, ...a] = [1, 2, 3, 4, 5];
console.log(arr);
console.log(a);
