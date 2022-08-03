

let strLength = "Lorem ipsum dolor sit amet, Lorem ipsum consectetur adipiscing elit"
console.log(strLength.length);


console.log(strLength.slice(0, 10))
console.log(strLength.substring(4, 19))
console.log(strLength.substr(0, 20))

// Change String Value
// let newStr = strLength.replace("Lorem", "mzhdipu");
let newStr = strLength.replace(/Lorem/g, "new test")

// console.log(newStr);


// Upcase & Lowercase Creation
console.log(strLength.toUpperCase())
console.log(strLength.toLowerCase())


// Remove Extra Spaces
let text1 = "      Hello World!      ";
let text2 = text1.trim();

// String Concate
let string001 = "This is String One Content";
let string002 = "This is String Two Content";

let stringResult = string001.concat(string002);

console.log(stringResult);

// String Catecher Postiong 
let stringCar = "I am Learning Web Development";
let carString = stringCar[10];
console.log(carString);
console.log(stringCar.charAt(12));


// String Cartcher to Code 
let stringCode = "I am Junior Webdeveloper";

console.log(stringCode.codePointAt(10));


// String convert to Array
let stringArr = "Mojammel Hossain Dipu";
let newStringArr = stringArr.split("-");
console.log(newStringArr);
