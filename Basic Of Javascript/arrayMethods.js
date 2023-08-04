// let array1 = new Array();
// let array2 = [];

// let jsObject = new Object();
// let jsObject1 = {};

// let string = new String("deepak");
// let string1 = "deepak";
// let number1 = new Number(12);

// Array
/// What is array ?
// Array collection same or different data
// keys: values
// key / index
// index always start with zero
// index is auto gen
let number = [10, 20, 30, 40, 20, 30, 20];
console.log(number);
// add ==> push()
//number.push(100);
// delete ==> splice()
//number.splice(3, 1); // index , count

// read ==> forEach()
// single record => array[indexNumber]
// multi record => forEach()

number.forEach(function (value, index) {
  // inline function or callback function
  console.log("hello", value, index);
}); // you can't use return keyword in forEach
// callback function a function written inside a other function call

// array to string ==> join()
let array = number.join("");
console.log(array);

// find data in array ==> find() , filter()
// single  ==> find() ==> single record else "undefined"
// multi ==> filter() ==> [ list ]  else []
let search = 40;
let searchNumber = number.find(function (value, index) {
  return value === search;
});
console.log(searchNumber);

let searchList = number.filter(function (value, index) {
  return value === search;
});
console.log(searchList);
// let number = [10, 20, 30, 40, 20, 30, 20];
// create new array from pre array ==> map()
let squareArray = number.map((value, index) => {
  let square = value * value;

  return "square of " + value + " is " + square;
});
console.log(squareArray);
// sort* ==> sort()
// reduce*
// includes*
// slice*

// console.log(number);
// String
// Dates
// Maths
// DOM
