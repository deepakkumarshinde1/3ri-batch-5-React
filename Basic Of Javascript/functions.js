// functions
// 5 ==>
//  function definition function
//  function expression
//  inline/callback function
//  IIFE immediate invoke function expression
//  arrow function

// a block of code use to performed specific task is called as function
// () ==> parameter body
let a = 10;
let b = 20; // global variable

function add(varOne, varTwo) {
  let result = varOne + varTwo;
  console.log(result); // local variable
  console.log("this is a function");
} // function definition
// when a function has 100% local variables ==> pure function

// if i want run a function , we call a function
add(a, b);
add(10, 40);

// var function scope variable
// let , const block scope variable
function fun() {
  if (10 === 10) {
    const text = "3ri technology";
    console.log("equal");
  } else {
    console.log("not equal");
  }

  console.log(text);
}

fun();
