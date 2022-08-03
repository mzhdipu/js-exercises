let arr = [1, 2, 3, 4, 5];

[a, b, ...c] = arr;

console.log(a, b, c);


let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8, 9, 10];

let result = [firstArr, ...secondArr];

[w, x, y, ...z] = result;

console.log(w, x, y, z);