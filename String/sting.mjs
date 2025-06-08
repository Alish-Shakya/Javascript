// "" , '' , ``

// //string literal, template or template string =``

let name = "ram";
let surname = "gurung";
// let output = " My full name is " + name + surname ;
let output = `My fullname is ${name} ${surname}. My age is ${20 + 20}.`;
console.log(output);

let num1 = 20;
let num2 = 40;
let num3 = `the total sum of ${num1} and ${num2} is: ${num1 + num2}`;
console.log(num3);
