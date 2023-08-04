// class ==> oop
//      distribution of code
//      reusable in nature
//      works with real time entity
//      code reduction
//      code abstraction will be there

// ES6 ==> class base approach
// class :: its a blue print of object
// object is instance of a class
// class is collection props and methods , it can be user by object
// props are like variable
// methods are like function
class Car {
  // internal constructor runs as a 1st methods on class
  constructor(_details) {
    this.wheels = _details.wheels;
    this.engin = _details.engin;
    this.isCNG = _details.isCNG;
  }
  printCardDetails() {
    console.log(this.wheels);
  }
}

let details = {
  wheels: 4,
  engin: 1,
  isCNG: true,
};
// object
// Car() ==> Constructor :: have the name like class , it us use
// to assign prop/methods to object
let swift = new Car(details);
swift.printCardDetails();

// arrow function
// generators
// storages
