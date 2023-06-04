// event
// event ==> user action
// keyboard => keypress , keyup
// mouse  ==> click, change , drag , drop, mouseover

function getElement(element) {
  let _element = document.querySelector(element);
  if (_element) return _element;
  else throw new Error(element + " Element not found");
}

function getElements(element) {
  let _element = document.querySelectorAll(element);
  if (_element.length > 0) return _element;
  else throw new Error(element + " Element/Elements not found");
}

let incButton = getElement("#inc-btn");
let h1Id = getElement("#myText");
let counter = 0;
// create click event for button
// if you want to add a data in element ==> .innerHTML
incButton.addEventListener("click", function () {
  h1Id.innerHTML = counter;
  h1Id.title = "Its Awesome";
  counter++;
});
