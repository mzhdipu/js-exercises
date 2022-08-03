let RactFun = function(width, height){
    this.width = width;
    this.height = height;

    this.draw = function(){
        return this.width + " & " + this.height
    }
}

let result = new RactFun(4, 10);
console.log(result.draw())



let result1 = new RactFun(24, 120);
console.log(result1.draw())