var sortArray = [3, 4, 5, 6, 7, 1, 9];
sortArray.sort();

sortArray.sort(function(a, b){
    if(a > b){
        return 1;
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0;
    }
})
console.log(sortArray);
