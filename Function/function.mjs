// function
// syntax: function_name (){}

// function fun1(){}

// function expression, function declaration, call function, pass value to a function,default value,
// function with return, arrow function

// function declaration
// function n9() {
//   console.log("I am function");
// }
// n9();

// // function expression
// let n9 = function () {
//   console.log("I am function2");
// };
// n9();

// pass value to function

// let sum = function (a, b) {
//   let c = a + b;
//   console.log(c);
// };
// sum(50, 20);

// A function will not execute unless it is called.We have to call a funv=ction to execute function code block.

// let add = function (
//   num1,
//   num2,
//   num3 //parameter
// ) {
//   console.log(
//     `the sum of ${num1}, ${num2}, ${num3} is : ${num1 + num2 + num3}`
//   );
// };
// add(1, 2, 3);

// defaut value
// it is not necessary to have same number of arguments and paramater.

// let fun1 = function (a, b, c = 4) {
//   console.log(a + b + c);
// };
// fun1(10, 20);

// return

// let fun1 = function (a, b) {
//   let c = a + b;
//   return c;
// };
// let output = fun1(10, 5); //15
// console.log(output);

// let sum = function (a, b) {
//   c = a + b;
//   return 4;
// };
// let add = sum(2, 4);
// console.log(add);

// function without return  : called normall : sum()
// function with return : call by storing it in a variable
// let fun1 = sum()

// arrow function

// syntax: ()=>{}

// let add = (num1, num2) => {
//   // let num3 = num1 + num2;
//   return num1 + num2;
// };
// let output = add(10, 20);
// console.log(output);
