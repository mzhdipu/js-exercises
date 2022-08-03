// Array to Object Convert
let obj = {
    a : 10,
    b :20
}

console.log(Object.entries(obj));


// Create Object useing Array Symbol
let arr = [
    ["a", 10],
    ["b", 20]
]

console.log(Object.fromEntries(arr));