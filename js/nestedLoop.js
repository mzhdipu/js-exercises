
var number = 20;
for(i = 1; i <= number; i++){
    
    var element = ""; 

    for(j = 1; j <= i; j++){
        element = element + j + " ";
    }

   console.log(element);
}


var startNumber = 5;
for(i = 0; i < startNumber; i++){
    var starElement = "";

    for(j = 0; j < startNumber; j++){
        starElement = starElement + "*" + " ";
    }

    console.log(starElement);
}


// var stringTest = 5;
// var converSting = "" + stringTest;
// console.log(typeof(converSting));

// var numberTest = "5";
// var converNumber = parseInt(numberTest);
// console.log(typeof(converNumber));


