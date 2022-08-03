var spech = "I love JavaScript and I am     learning JavaScript";
var spechCount = "";

for(i = 0; i < spech.length; i++){
    var element = spech[i];
    
    if(element == " " && spech[i-1] != " "){
        spechCount++;
    }
}
spechCount++
console.log(spechCount);