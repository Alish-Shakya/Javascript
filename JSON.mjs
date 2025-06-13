// JSON

//JSON.stringify() => convert object to json
//JSON.parse() => covert json into objecet

let info = {
  name: "ram",
  age: 14,
  address: "ktm",
};

//converts a javascritp object object value to a javascript object notation JSON string

console.log(JSON.stringify(info));

// converts a javascript object Notification(JSON) string into a javascript object
let a = { name: "ram", age: 14, address: "ktm" };
console.log(JSON.parse(a));
