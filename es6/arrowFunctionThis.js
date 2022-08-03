
let myFun = {
    name : "Mojammel Hossain Dipu",

    funOutput : function(){
        
        setTimeout(() => {
            console.log(`Hello ${this.name}`);
        })
    }
}

myFun.funOutput();