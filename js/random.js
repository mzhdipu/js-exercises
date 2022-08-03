function random (n){
    var element = Math.random() * n;
    return element;
}

var randomValue = random (100);

console.log(Math.round(randomValue));