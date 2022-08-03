
class person {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    print(){
        console.log(`My Name is ${this.name} & My Email is ${this.email}`);
    }
}

let result = new person("mzhdipu", "mzhdipu@gmail.com");

console.log(result.print());