// let rect = {
//     width   : 10,
//     height  : 20,

//     draw    : function(){
//         return "My Width is " + this.width + " " + "\n My Height is " + this.height;
//     }
// }

// console.log(rect.draw())

let createFun = function(width, height){
    return {
        width   : width,
        height  : height,
    
        draw    : function(){
            return "My Width is " + this.width + " " + "\n My Height is " + this.height;
        }
    }
}

let result = createFun(4, 6);
console.log(result.draw())

let result1 = createFun(14, 16);
console.log(result1.draw())