// String

let string = "India is my country.png.pdf";

// upperCase()
string = string.toUpperCase();

// lowerCase()
string = string.toLowerCase();
// string to array();
let stringArray = string.split(" ");
// file extension
let pos = string.lastIndexOf(".");
// sub-string
let ext = string.substring(pos + 1);
console.log(ext);
// console.log(stringArray);

let string1 = "I am in office #@ its awesome";
let string2 = string1.replace(/[#$_!@]*/g, "");
console.log(string2);
