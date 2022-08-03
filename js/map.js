var a = [3, 4, 5, 6];
var sum = 0;

// a.map(function(value){
//     console.log(value * 2)
// })


function mapFun(a, cb){
    for(i = 0; i < a.length; i++){
        cb(a[i]);
    }
}
mapFun(a, function(value){
    var element = value * 2;
    sum += element;
})

//console.log(element);
console.log(sum);



