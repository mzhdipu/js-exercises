

function FirstFun (width){
    this.width = width;

    this.getHeight = function(){
        console.log("The Width is = " + this.width );
    }
}

FirstFun.prototype = {
    second : function(){

        this.getHeight();

        return ("This is Second Function")
    },

    toString : function(){
        return " The Width is = " + this.width;
    }
}

let result1 = new FirstFun(55);
let result2 = new FirstFun(66);

/// Method 001
console.log(Object.keys(result1))
console.log(Object.keys(result2))

// Methoda 002
result1.hasOwnProperty("width")
result2.hasOwnProperty("getHeight")

// Methoda 003
for(let i in result1){
    console.log(i);
}

for(let i in result2){
    console.log(i);
}



