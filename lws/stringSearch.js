// Search Word Position
let swp = "I love JavaScript";
console.log(swp.indexOf("love"));


let str = "Please locate where 'locate' occurs!";
//console.log(str.lastIndexOf("locate"));

let str2 = "Please locate where occurs!";
console.log(str2.startsWith("locate"));
//console.log(str.endsWith("locate"));

let searchString = "Test Search String";
console.log(searchString.search("Search"));

// Match String
let matchStr = "The rain in SPAIN stays mainly in the plain";
let matchStr2 = matchStr.match(/in/gi);
console.log(matchStr2);

// Includes 
let inclu = "Hi I am Mojammel Hossain Dipu & I am Learning JavaScript";
console.log(inclu.includes("Hossain"));