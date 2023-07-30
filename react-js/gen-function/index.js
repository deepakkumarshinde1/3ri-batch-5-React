function* data() {
  yield 10;
  yield 20;
  yield 30;
  yield 40;
}

let _data = data();
// console.log(_data.next());
// console.log(_data.next());
// console.log(_data.next());
// console.log(_data.next());

function* genId(start, end) {
  --start;
  while (start < end) {
    start++;
    yield start;
  }
}
let getNewId = genId(100, 110);
console.log(getNewId.next());
console.log(getNewId.next());
console.log(getNewId.next());
console.log(getNewId.next());
console.log(getNewId.next());
console.log(getNewId.next());
console.log(getNewId.next());
