
let test = new Set ([1, 2, 1, 5, 3, 4, 5]);

for(i of test){
    // console.log(`${i} : ${test[i]}`);
    console.log(i);
}

/// ADD
let setAdd = new Set();
setAdd.add(1);
setAdd.add(2);
setAdd.add(3);

console.log(setAdd);

setAdd.delete(2);

// DELETE SET
console.log(setAdd);

// VARIABLE SET
let a = 1;
let b = 2;

let ab = new Set([3, 4]);
ab.add(a);
ab.add(b);

//console.log(ab);
console.log(Array.from(ab).sort());

// Ittarable
for(let i of ab.values){
    console.log(i);
}
