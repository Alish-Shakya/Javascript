let items = [
  { name: "keyboard", price: 1500 },
  { name: "monitor", price: 7000 },
  { name: "USB cable", price: 500 },
  { name: "webcam", price: 2500 },
];
// Calculate the total price of all items.

let output = items
  .map((value, index) => {
    return value.price;
  })
  .reduce((previous, next) => {
    return previous + next;
  }, 0);
console.log(output);
