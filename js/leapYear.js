function isLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

var remainder = isLeapYear(2022);

console.log(remainder);