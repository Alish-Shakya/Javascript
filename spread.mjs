// spread operator

// let arr = [1, 2, 3];
// let abc = ["a", "b", "c"];
// // spread operator are wrapper opener.

// let output = [9, 8, ...abc, "ram", 7, 6, ...arr];
// console.log(output);

let info = {
  name: "alish",
  age: 18,
  address: "ktm",
};
let info1 = {
  ...info,
  ismarried: true,
};

console.log(info1);
