

let defaultFun = function(width = 55, height = 33){
    console.log(`The width is ${width} & The height is ${height}`);
}

defaultFun();



let defaultFun2 = function(width = 55, height = 33){
    console.log(`The width is ${width} & The height is ${height}`);
}

defaultFun2(44, 88);


// ===========================================
// ===========================================
let testFun = function(name = "Mojammel", email="mojammel@gmail.com"){
    console.log(name, email)
}

console.log(testFun("mzhdipu", "mzhdipu@gmail.com"))




let firstFun = function(name){
    
   return name == null ? "mzhdipu" : name;
}

console.log(firstFun("mojammel Hossain dipu"))






let firstFun2 = function(name){
    
    if(name == null){
        return ("mzhdipu");
    }
    else{
        return name;
    }
}

console.log(firstFun2("mojammel Hossain dipu"))