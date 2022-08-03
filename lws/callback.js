let paymentSuccess = true;
let marks = 80;

function endroll(callback){
    console.log("Course Endrollment is in progress");
    
    setTimeout(function(){
        if(paymentSuccess){
            callback();
        }
        else{
            console.log("Payment Failed");
        }
    }, 2000)
}

function progress(callback){
    console.log("Course on Progress...");

    setTimeout(function(){
        if(marks >= 70){
            callback();
        }
        else{
            console.log("You Could not get Enough Marks to get the Certificate");
        }
    }, 3000)
}

function getCertificate(){
    console.log("Preparing your Certificate.... ");

    setTimeout(function(){
        console.log("Congrates you got the Certificate")
    }, 1000);
}

endroll(function(){
    progress(getCertificate);
})