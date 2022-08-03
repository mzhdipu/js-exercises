// ARRAY LITARATE 
let arr1 = [10, 29, 33, 4, 60];
arr1.forEach(function(value, index, arrary){
    console.log(value);
})


// CREATE NEW ARRAY FROM EXISTING ARRAY WITH CONDITION
let arr2 = [10, 29, 33, 4, 60];

let arr2Reusul = arr2.map(function(value, index, array){
    return value * 2 ;
})

console.log(arr2Reusul);


// CREATE NEW ARRAY USING CONDTION IN EXISTION ARRAY 
let conArray = [22, 4, 55, 3, 66, 2, 1];
let conArrayResult = conArray.filter(function(value, index, array){
    return value % 2 ==  0;
})
console.log(conArrayResult);


// FIND TOTAL ARRAY VALUE 
let totalArray = [2, 4, 6, 7];
let totalArrayResult = totalArray.reduce(function(pre, cur, index, array){

//let totalArrayResult = totalArray.reduceRight(function(pre, cur, index, array){

    return pre * cur;

})

console.log(totalArrayResult);


// CHECK ALL ARRAY ELEMENT WITH CONDTION AND RETURN ON BOOLEAN VALUE
let bol = [22, 33, 44];
let bolReulst = bol.every(function(value, index, array){
    return value > 10;
})
console.log(bolReulst);


// CHECK ANY ELEMENT OF ARRAY AND RETURN BOOLEAN VALUE
let arrSome = [2, 3, 5, 6];
let arrSomeResult = arrSome.some(function(value, index, array){
    return value > 2;
})

console.log(arrSomeResult);


// CHECK ARRAY INDEX NUMBER
let fruits = ["Apple", "Orange", "Apple", "Mango"];
let fruitsPostion = fruits.indexOf("Apple") +1;
console.log(fruitsPostion);



// CHECK ARRAY LAST INDEX NUMBER
let fruits3 = ["Apple", "Orange", "Apple", "Mango"];
let fruitsPostion3 = fruits3.lastIndexOf("Apple") +1;
console.log(fruitsPostion3);




// CHECK ARRAY ELEMENT BY CONDTION AND RETURN VALUE FIRST FROM ALL
let findFruits = ["Apple", "Orange", "Apple", "Mango", "Orange"];
let findFruitsResult = findFruits.find(function(value, index, array){
    return value == "Orange";
})
console.log(findFruitsResult);



// CHECK ARRAY ELEMENT BY CONDITION AND RETUNR INDEX FIRST FORM ALL
let num = [4, 9, 16, 25, 29];
let numResult = num.findIndex(function(value, index, array){
    return value > 10;
})
console.log(numResult);


// CREATE ARRAY FORM STRING 
let js = "JavaScript";
console.log(Array.from(js));



// ITTERATE ARRAY INDEX NUMBER
const fruitsS = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruitsS.keys();

for (let x of keys) {
  console.log(x);
}

