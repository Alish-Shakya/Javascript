// // object
// // {} : curly braces or block
// // Array is a collection of values where as object is a collection of key value pairs
// // key value part are called properties.
// let info = {
//   name: "ram",
//   age: 20,
//   address: "ktm",
// };
// // get value to an object
// console.log(info);
// console.log(info.address);

// // change value of an object
// info.name = "harry";
// console.log(info.name);

// // delete value of an object
// delete info.name;
// console.log(info);

// let info = {
//   name: "ram",
//   age: 13,
//   address: "kapan",
//   name: "harry",
// };
// // Duplicate key dosenm't exits, if exut the duplicate key overrites by last key value
// console.log(info);

let info = {
  name: "ram",
  favFruits: ["apple", "mango", "banana"],
  location: {
    country: "nepal",
    province: "bagmati",
    city: "ktm",
  },
  age: () => {
    // console.log("I'm function");
    return 20;
  },
};
// console.log(info);
console.log(info.favFruits[0]);
console.log(info.location.city);
// info.age();
let year = info.age;
console.log(year);
