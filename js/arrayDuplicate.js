var number = [33, 44, 54, 53, 89, 33, 99, 54, 100, 99];

var numberAdd = [];

for(i = 0; i < number.length; i++){
    var element = number[i];

    var indexElement = numberAdd.indexOf(element);

    if(indexElement == -1){
        numberAdd.push(element);
    }
}
console.log(numberAdd);