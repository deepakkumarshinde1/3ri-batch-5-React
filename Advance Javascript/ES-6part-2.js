// promises
// promise
//   ---> Success ===> Resolve = output => .then() / try{ }
//   ---> Fail ===> Reject = error Output => .catch() / catch{}

// when promise run the success/resolve output will called in .then()
// when promise run the failure/rejected errorOutput will called in .catch()

// promise definition ==> promise function
// async ==> convert a function promise function

async function div(a, b) {
  if (b === 0) {
    // created exception
    return Promise.reject("Cannot divide by zero");
  } else {
    let result = a / b;
    return Promise.resolve(result);
  }
}
console.log("hello");
// run ==> promise function call
// syntax run single promise
div(10, 0)
  .then(function (output) {
    console.log(output);
  })
  .catch(function (errorOutput) {
    console.error(errorOutput);
  });

// promise are async in nature , hence they are non blocking
// create exception on error

// handel multi promises

// call server api with help of fetch method
// fetch is promise base api/method
// async await
// await ==> runs promise and return result on success or throw exception in failure
// await will not allow to run next promise until current promise is executed
// fetch
/**
 * 1 f
 * 2
 * 3
 * 4
 * 5
 */
async function getData() {
  try {
    let url = "https://fakestoreapi.com/products";
    let response = await fetch(url, { method: "GET" });
    // to collect data from response we have a .json()
    let result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
getData();
console.log("hello");

// fetch().then(function(response){
//   return response.json()
// }).then(function(data){

// }).catch(function(error){

// })

// class ==> oop
//      distribution of code
//      reusable in nature
//      works with real time entity
//      code reduction
//      code abstraction will be there

// arrow function
// generators
// storages
