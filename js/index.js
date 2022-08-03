
function extend (Parent, Child){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}


function AbcdFun (width){
    this.width = width;
}

AbcdFun.prototype.common = function(){
    console.log("I am a Common Function For all")
}

AbcdFun.prototype.common2 = function(){
    console.log("I am a Common Function For all")
}

extend(AbcdFun, EfghFun);

function EfghFun (height){
    this.height = height;
}

// AbcdFun.prototype.common = function(){
//     console.log("I am Overritten Common Function")
// }


extend(AbcdFun, ThirdFun);

function ThirdFun (minHeight){
    this.minHeight = minHeight;
}


let result = new AbcdFun(44)
let result2 = new EfghFun(55)
let result3 = new ThirdFun(66);