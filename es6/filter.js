

let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.filter(function(value, index){
//     console.log (value > 2)
// })


let arr2 = arr.filter((value, index)=>{
    return (value % 2 == 0);
})

console.log(arr2);