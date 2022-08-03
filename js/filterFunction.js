var a = [3, 4, 5, 6, 9, 34, 22, 19, 46];
var newArray = [];
// var newArray = a.filter(function(value){
//     return (value % 2 == 0);
// })

// console.log(newArray);

function fistFun(a, cb){
    for(i = 0; i < a.length; i++){
        var temp = a[i];
        var cbFun = cb(temp);

        if(cbFun){
            newArray.push(temp);
        }
    }
}

var result = fistFun(a, function(value){
    return value % 2 == 0;
})

console.log(newArray);