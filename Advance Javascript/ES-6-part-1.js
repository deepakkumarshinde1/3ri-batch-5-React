// ES5 basic
// ES6 advance

// let var const
// ***************** destructing
// extracting data from array or object
// array
let array = [10, 20];
// let numberOne = array[0];
// let numberTwo = array[1];

let [numberOne, numberTwo] = array;
console.log(numberOne);
console.log(numberTwo);

// object
let product = {
  pName: "Optical Mouse",
  pBrand: "Dell",
  pVendor: "J.K Electronics",
  pMangDate: "1-Jan-2023",
  pLocation: "Pune",
};

// let productName = product.pName;
let { pLocation, pName: productName } = product;

console.log(productName, pLocation);

//******************** spread operator
// create a new copy of array / object
// marg multiple array / object
// array
let arrayOne = [10, 20, 30];
let arrayThree = [100, 200, 300];

// let arrayTwo = arrayOne.concat(arrayThree);
let arrayTwo = [...arrayOne, ...arrayThree];

arrayOne[0] = 10000;
console.log(arrayOne, arrayTwo);

// jsObject
let prod = {
  pName: "Optical Mouse",
  pBrand: "Dell",
  pMangDate: "1-Jan-2023",
};

let vendor = {
  pVendor: "J.K Electronics",
  pLocation: "Pune",
};

// let prodDetails = Object.assign({}, prod, vendor);
let prodDetails = { ...vendor, ...prod };

console.log(prodDetails);

// Single Thread ==> only on One Thread
// By default ==> Synchronous in nature

// Event Loop ==> Asynchronous (Non Blocking)
// DOM

console.log("hi");
// setTimeout
// setTimeout(function () {
//   console.log("timeout");
// }, 2000); // 1s === 1000ms
// want to run a code after 5 sec
console.log("hi");
// setInterval
// want to run a code after every 1 sec
let count = 10;
let intervalId = setInterval(function () {
  if (count === 1) {
    clearInterval(intervalId);
  }
  console.log(count);
  count--;
}, 1000);

// promises
// async await
// fetch

// class
// arrow function
// generators
// storages
