
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

let resultArr = [arr, ...arr2];

console.log(resultArr)


let obj = {
    firstName   :   "Mojammel",
    middelName  :   "Hossain",
    lastName    :   "Dipu",
}

let obj2 ={
    profession  :   "Web Design",
    projectDone :   "50+"
}

let resultObj = {obj, ...obj2};
console.log(resultObj);
