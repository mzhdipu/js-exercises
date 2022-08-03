function first(num){
    return (num * 2);
}

function second(a, b){
    return a + b;
}

function output(inp){
    return inp;
}

var result = output(first(second(4, 2)));

console.log(result);