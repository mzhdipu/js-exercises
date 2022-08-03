var a = [3, 4, 5];
var sum = 0;

a.forEach(function(value, index, a){
    var element = value;
    sum += element;
    
})
console.log(sum);


// function total(a, cb){
//     for(i = 0; i < a.length; i++){
//         cb(a[i]);
//     }
// }
// var sum = 0;
// total(a, function(value){
//     sum += value;
// });
// console.log(sum);