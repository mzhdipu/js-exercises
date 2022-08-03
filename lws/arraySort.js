

let arrSort = [-2, -1, 1, 2, 3, 4, 5];

arrSort.sort(function(a, b){
    if(a > b){
        return -1
    }
    else if(a < b){
        return 1;
    }
    else{
        return 0;
    }
})

console.log(arrSort)


//============================
let arr = [4, 1, 6, 14, 7, -2, -1, 0];
arr.sort(function(a, b){
    //return a - b;
    return b - a;
})

console.log(arr)

