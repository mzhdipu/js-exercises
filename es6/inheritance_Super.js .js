
class firstFun {
    fun001(){
        console.log("I Love JavaScript");
    }

    fun002(){
        console.log("I am Learning JavaScript");
    }
}

class second extends firstFun{
    totalValue(){
        super.fun001();
        super.fun002();
    }
}

let result = new second();

//console.log(result.totalValue());
console.log(result.fun001());