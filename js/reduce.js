var a = [3, 4, 5, 6, 9, 34, 22, 19, 46];

// var sum = a.reduce(function(pre, cur){
//     return (pre + cur);
// })

// console.log(sum);

function first(a, cb, acc){
    for(i = 0; i < a.length; i++){
        var temp = a[i];
         acc = cb(acc, temp);
    }
    return acc;
}

var result = first(a, function(pre, cur){
    return pre + cur;
});
console.log(result);




