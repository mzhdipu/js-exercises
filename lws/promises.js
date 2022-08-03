
console.log ("Taks 01");

//let taks02 = true;

let varPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        taks02 = true ? resolve("Task 02") : reject("Task Failed");
    }, 2000);
})

console.log("Taks 03");

varPromise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })


    /// Advance Method 
    let paymentSuccess = true;
let marks = 80;

function endroll(){
    console.log("Course Endrollment is in progress");
    
    let endrollPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }
            else{
                reject("Payment Failed");
            }
        }, 2000)
    })
    return endrollPromise;
}

function progress(){
    console.log("Course on Progress...");

    let progressPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 70){
                resolve();
            }
            else{
                reject("You Could not get Enough Marks to get the Certificate");
            }
        }, 3000);
    });

    return progressPromise;
}

function getCertificate(){
    console.log("Preparing your Certificate.... ");

    let getCertificatePromise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrates you got the Certificate")
        }, 1000);
    });
    return getCertificatePromise;
}

endroll()
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })