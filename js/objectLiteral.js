let rect = {
    weight : 100,
    height : 50,

    draw : function(){
        console.log("I am Learning JavaScript");
        console.log("my weight is " + this.weight)
        console.log("my weight is " + this.height)
    }
}

console.log(rect.draw());