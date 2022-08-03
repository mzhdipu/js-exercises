let obj1 ={
    fName : "Mojammel Hossain",
    lName : "Dipu",

    obj1FullName : function(){
        return this.fName + " " + this.lName;
    }
}

let obj2 = {
    fName : "mzh",
    lName : "Dipu",

    obj2FullName : function(){
        return this.fName + " " + this.lName;
    }
}

// console.log(obj1.obj1FullName())
// console.log(obj2.obj2FullName())
console.log(obj2.obj2FullName.call(obj1))
