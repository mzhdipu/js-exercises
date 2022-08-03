var number = [33, 44, 54, 53, 89, 100, 99];
var markMax = number[0];

for(i = 0; i < number.length; i++){
    var element = number[i];
    
    if(element > markMax){
        markMax = element;
    }
}

console.log(markMax);
