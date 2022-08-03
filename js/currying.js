function currying(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

var result = currying(2)(3)(4);
console.log(result);