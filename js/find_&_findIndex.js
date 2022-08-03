var arr = [3, 4, 5, 6, 9, 34, 22, 19, 46];

// var result = arr.find(function(value, index, arr){
//     return value == 34;
// })
// console.log(result);

// function first(arr, cb){
//     for(i = 0; i < arr.length; i++){
//         var temp = arr[i];
//         var callBack = cb(temp);

//         if(callBack){
//             return temp + "," + "\n Index Number of Find Value is" + " " + i;
//         }
//     }
// }
// var result = first(arr, function(value){
//     return value == 34;
// })

// console.log(result);


// ============ Find index ============
// var result = arr.findIndex(function(value, index, arr){
//     return value == 9;
// })
// console.log(result);


function arrayIndex(arr, cb){
    for(i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return i;
        }
    }
}
var result = arrayIndex(arr, function(value){
    return value == 22;
})

console.log(result);