

// ============================================
let a = 10;
let b = 20;

let obj = {
    a,
    b,

    testFun (){
        console.log(this)
    }
}

console.log(obj)



// ============================================
let xyz = function(x, y){
    return{
        x,
        y,

        testxyz(){
            console.log(this)
        }
    }
}

console.log(xyz(3, 4))



// ============================================

let Output = function(width, height){
  return{
    width,
    height
  }
}

let test = new Output(44, 55);

console.log(test);