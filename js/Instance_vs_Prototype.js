

function FirstFun (width){
    this.width = width;
}

FirstFun.prototype = {
    second : function(){
        return ("This is Second Function")
    },

    toString : function(){
        return " The Width is = " + this.width;
    }
}

let result1 = new FirstFun(55);
let result2 = new FirstFun(66);