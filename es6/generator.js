


// Iterator with Generator
let obj = {
    start : 0,
    end : 5,

    [Symbol.iterator] : function* (){
        let currentValue = this.start;

        for (let i = 0; i < this.end; i++){
            yield (currentValue++);
        }
    }
}
let es6Iterator = obj[Symbol.iterator]();

console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())
console.log(es6Iterator.next())



// function* generatorFun (){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let gen =  generatorFun();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
