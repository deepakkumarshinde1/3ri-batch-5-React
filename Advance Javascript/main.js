class Circle {
  constructor(_rad) {
    this._radius = _rad;
    this.dia = _rad * _rad;
  }

  // getters
  // setters
  set radius(value) {
    this._radius = value;
    this.dia = value * value;
  }

  get radius() {
    return this._radius;
  }
}

let circle = new Circle(10);

console.log(circle.radius);
console.log(circle.dia);

circle.radius = 50;

console.log(circle.radius);
console.log(circle.dia);

circle.radius = 21;

console.log(circle.radius);
console.log(circle.dia);

// arrow functions
// What is react
// What is node
// What is npm
// basic command npm
// download & install node js

//**  what is react state
//**  what is react props
//**  what is react component
