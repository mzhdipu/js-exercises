
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

async function course(){
    try{
        await endroll();
        await progress();
        let message = await getCertificate();
    
        console.log(message);
    }
    catch (err){
        console.log(err);
    }
}

course()