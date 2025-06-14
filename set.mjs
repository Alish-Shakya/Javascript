let list = [1, 4, 1, 7, 4, 99, 45, 99, 4, 1, 45, 9];

let output = new Set(list);
let out = [...new Set(list)];
console.log(output);
console.log(out);

let abc = [
  1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 4, 4, 5, 6, 7, 1, 9, 0, 0, 7, 5,
];

let ab = new Set(abc);
console.log(ab);
