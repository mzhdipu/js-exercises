


let arr = [2, 3, 4, 5, 6, 77, 33, 8];
let result = arr[arr.length - 1];
console.log(result);



let manulaDy = [ 44, 55, 66, 77];

//manulaDy[manulaDy.length] = 100;
manulaDy.push(100)

console.log(manulaDy);


// Associated Object Array
let assObj = [];

assObj["Name"] = ["mzhdipu"];
assObj["age"] = [30]

console.log(assObj);
console.log(assObj.Name)
console.log(assObj.age)


for(i in assObj){
  console.log(assObj[i])
}


// Array Object or Not
let newArray = [3, 4, 6];

console.log(Array.isArray(newArray));


// instend of 
let ins = [3, 4, 6];

console.log(ins instanceof String);
console.log(ins instanceof Boolean);
console.log(ins instanceof Object);
console.log(ins instanceof Array);
console.log(ins instanceof Number);