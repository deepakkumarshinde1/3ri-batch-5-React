// js Object
let array = ["a", 1, false, [1], null, function () {}];
let student = ["deepak", 10, 50, 21];
// js Object is collection of key value pair
// where key are user defined.
let obj = {
  name: "deepak",
  rollNo: 10,
  marks: 50,
  age: 21,
  printStudent: function () {},
  list: [1, 2, 3, 4],
};

// read js object
console.log(obj.list);

// add new props
obj["course"] = "MERN stack";

// delete form object
delete obj.name;

console.log(obj);
// collect all props of object
let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj);
console.log(values);

// object to array
let arrayList = Object.entries(obj);
console.log(arrayList);

const product = {
  pName: "dell",
};
Object.freeze(product);

product.pName = "lenovo";
product["price"] = 40000;

console.log(product);
