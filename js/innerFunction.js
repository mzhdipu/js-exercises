function firstName(name){
    var givenName = name.split(" ")[0];
    return givenName;
}
var name = "Mojammel Hossain Dipu";
console.log(firstName(name));
