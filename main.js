// Arithmetic Operators
let a = 21;
let b = 10;
// + , - , * , / (Q) , % (reminder)
let result = a % b;
//console.log(result);

let a2 = Number("10a"); // NaN ==> Not A Number
let b2 = 10;
// true = 1
// false = 0
console.log(a2 + b2); // number pure or boolean ==> addition
// any addition with string ==> join/concat

// Assignment Operators

let a1 = 50;
a1 += 30; //a1 = a1 + 30;
a1 -= 30; //a1 = a1 - 30;
a1 *= 30; //a1 = a1 * 30;
a1 /= 30; //a1 = a1 / 30;
a1 %= 30; //a1 = a1 % 30;

// inc Operator
a1++; // inc by one
++a1; // inc by one

// dec Operators
a1--; // dec by one
--a1; // dec by one

// power operations
//console.log(2 ** 10); // 2*2*2

// Comparison Operators
// if .. else ==> conditional statements

// is deepak present for training
// true ==> Yes
// false ===> No
// ==  :: eq (data)
// !=  :: notEq
// === :: strongEq (data + type)
// !== :: strongNotEQ
// > :: get
// < :: less
// >= :: getEq
// <= :: lessEq
let a3 = 20;
let b3 = 20;
if (a3 >= b3) {
  // true
  console.log("Yes");
} else {
  // false
  console.log("No");
}

// Logical Operators
