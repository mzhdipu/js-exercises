var a = [3, 4, 5, 6, 7, 8];

var find = 18;
var isFind = false;

for(i = 0; i < a.length; i++){
    var element = a[i];

    if(element == find){
        console.log(true);
        isFind = true;
    }
}
if(!isFind){
    console.log(false);
}