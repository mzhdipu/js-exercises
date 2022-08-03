
class car{
    constructor(name, color, topSpeed){
        this.name = name;
        this.color = color;
        this.speed = topSpeed;
        this.currentSpeed = 0
    }
    drive = ()=>{
        console.log("Driving Started");
        this.currentSpeed += 10;
        console.log(`Current Speed Now : ${this.currentSpeed}`);     
    }
    zeroToSixty = () => {
        setTimeout(()=>{
            console.log("PHEW! Thast was fast..");
            this.currentSpeed = 60;
            console.log(this.currentSpeed = 60)
        },2000)
    }
    brack = () => {
        console.log("Breaking.......");
        this.currentSpeed -= 10;
    }
    stop = ()=>{
        console.log("Car is Stop Now !");
        this.currentSpeed = 0;
    }

}

let carBMW = new car ("BMW", "BLACK", 150);

console.log(carBMW.currentSpeed)

for(let i = 0; i < 5; i++){
    console.log(carBMW.drive());
}

console.log(carBMW.currentSpeed)

carBMW.stop();
console.log(carBMW.currentSpeed)
carBMW.zeroToSixty();

// console.log(carBMW.currentSpeed)
// for(let i = 10; i > 6; i--){
//     console.log(carBMW.drive())
// }
// carBMW.stop();
// console.log(carBMW.currentSpeed)
// console.log(carBMW.currentSpeed)
// carBMW.brack();
// console.log(carBMW.currentSpeed)
// carBMW.stop();
// console.log(carBMW.currentSpeed)
//carBMW.zeroToSixty();

// for(let i = 1; i < 6; i++){
//     console.log(carBMW.drive())
// }

