

// CONVERT ARRAY TO STRING
let arrToString = [1, 2, 3, 4];
console.log(arrToString);
console.log(arrToString.toString())


// CREATE ARRAY TO STRING USING ANY WORD OR SYMBOLE
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" | "));

// REMOVE LAST ARRAY ELEMENT
console.log(fruits.pop())

// ADD ARRAY ELEMENT IN FIRST
console.log(fruits.push("Pineapple"))

// ADD FIRST ARRAY ELEMENT
console.log(fruits.unshift())

// REMOVE FIRST ARRAY ELEMENT
console.log(fruits.shift())

// REMOVE NEW ARRAY ELEMENT FORM LAST (DYNAMICLY)
let rml = [1, 2, 3, 4];
rml[rml.length] = 222;
console.log(rml)


// ADD NEW ARRAY ELEMENT IN LAST (DYNAMICLY)
let alem = [3, 4, 5, 2];
alem[alem.length - 1];
console.log(alem);


// CHANGE ARRAY ELEMENT
let chArray = [1, 2, 3, 4];
chArray[2] = "text";
console.log(chArray);

// ADD ELEMENT ANY ARRAY POSITION
const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
fruitsss.splice (0, 2, "test-1", "test-2");
console.log(fruitsss);


// CREATE NEW ARRAY BY CUTTING EXISTING ARRAY ELEMENT
let elementArray = [1, 2, 3, 4, 5, 6];
let newElm = elementArray.slice(2, 5);
console.log(newElm);


// JOIN ONE ARRAY TO ANOTHER ARRAY
let arr1 = [22, 33];
let arr2 = [44, 55];
let arr3 = [66, 77];
let arr4 = arr1.concat(arr2, arr3);
console.log(arr4.concat(88, 99, 10));