class Circle {
  private _radius: number = 0;
  private _dia: number = 0;

  constructor(_rad: number) {
    this._radius = _rad;
    this._dia = _rad * _rad;
  }

  // getters
  // setters
  set radius(value) {
    this._radius = value;
    this._dia = value * value;
  }

  get radius() {
    return this._radius;
  }

  get dia() {
    return this._dia;
  }
}

let circle = new Circle(10);

export default {};

// access specifiers
//  public ==> any one can access
//  private ==> pros/methods ==> access in a class
//  protected ==>pros/methods ==> access in a class & child class
