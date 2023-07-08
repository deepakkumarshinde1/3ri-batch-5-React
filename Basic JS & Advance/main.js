// ES5
var text = 10;
var text = "hello";

// in-build function , class , object

// console ==> in-build object of js
console.log("message");

// let text1 = 20;
// let text1 = "hello";

const text2 = 30;
// text2 = "hi";

// String , Number , Boolean , Symbol , Undefine , Object,

// typeof ==> check data type of a variables
//let text3 = []; //new Array();
let text3;
console.log(text3, typeof text3);

// operators
// Arithmetic  + - / * %
// Assignment = += -= *= %= /=  ++pre --pre post++ post--
// Compare < > == === != !== >= <=
// Logical && || ! !(&&) !(||)
// Ternary (condition) ? trueValue : falseValue

// condition
// if else
// find number is event or odd
let number = 10;
// let result = null;

// if (number % 2 === 0) {
//   result = "even";
// } else {
//   result = "odd";
// }

let result = number % 2 === 0 ? "Event" : "Odd";

console.log(result);

if (false == !true) {
  // true code statement
} else {
  // false code statement
}

//  chain if else
if (false == true) {
  // true code statement
} else if (false == true) {
  // true code statement
} else if (false == true) {
  // true code statement
} else if (false == true) {
  // true code statement
} else {
  // false code statement
}

if (false == true) {
  // true code statement
}
// switch
let choice = "";
switch (choice) {
  case 1:
    // case 1 code
    break;
  case "a":
    // case 1 code
    break;
  case true == true:
    // case 1 code
    break;
  default:
    // case 1 code
    break;
}

// DRY ==> Don't repeat YourSelf

// functions ==> set of block od statement
// avoid duplication of code
// function must be dynamic in nature ==> Pure Function
// when one function called other function ==> Higher Order Function
// () ==> argument / parameter body

function fun(varOne = 0) {
  console.log(varOne); // we get undefined
  // function code
} // function definition

// run
fun();

let value = 10;

function testValue() {
  var value = 30;

  if (value === 30) {
    var value = 20;
  }
  console.log(value);
}

testValue();
// console.log(value);
