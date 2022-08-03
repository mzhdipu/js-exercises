let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i <arr.length; i++){
//     console.log(arr[i]);
// }



// Old JavaSript Iterator 

// function IteratorFun  (collection){
//     let i = 0;
//     return{
//         next(){
//             return{
//                 done: i > collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let result = IteratorFun(arr);

// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());



// ES6 Iterator 
// let es6Iterator = arr[Symbol.iterator]();

// console.log(es6Iterator.next());
// console.log(es6Iterator.next());
// console.log(es6Iterator.next());
// console.log(es6Iterator.next());
// console.log(es6Iterator.next());
// console.log(es6Iterator.next());


let names = "Mojammel Hossain Dipu"[Symbol.iterator]();

console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())
console.log(names.next())


