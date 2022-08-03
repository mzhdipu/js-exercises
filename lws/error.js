// try{
//     abc ("Welcome to JavaScript");
// }
// catch(err){
//     console.log(err);
// }



// METHOD 02
let x = 10
try {
    if (x < 100)
    throw{
        name: "Custom Error",
        message : "Custom Error Message Description"
    }
}
catch(err){
    console.log(err);
}