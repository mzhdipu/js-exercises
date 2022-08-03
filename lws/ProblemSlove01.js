// Ludu Game


// let ludu = Math.random() * 6 + 1;

// function luduGame (ludu){
//     return Math.floor(ludu);
// }

// console.log(luduGame(ludu))



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getRndInteger(1, 6))


  /// SECOND PROBLEM 
  
let namess = ["Rohim", "Korim", "Jorina", "Rohima", "Abul"];
namess.sort(function(a, b){
    if(a > b){
        return 1
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0;
    }
})

console.log(namess);


// PROBLEM 003


let rollNo = [22, 4, 1, 6, 3];
rollNo.sort(function(a, b){
    if(a > b){
        return 1 ;
    }
    else if(a < b){
        return -1;
    }
    else{
        return 0
    }
})

console.log(rollNo);


/// PROBLEM  004 
function leapYear (year){
  if(year % 4 === 0 || year % 4 === 0 && year % 100 !== 0){
      return "This is Leap Year";
  }
  else{
      return "This is not Leap Year"
  }
}

console.log(leapYear(2024));


// PROBLEM 005
let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let sentence = "I Love JavaScript & I am Learning JavaScript Now";

function findVowel(sentence){
    let count = 0;
    //let letter = Array.from(sentence);
    let letter = sentence.split("");

    letter.forEach(function(value, index, array){
        if(vowel.includes(value)){
            count++
        }
    })

    return count;
}

console.log(findVowel(sentence));


// PROBLEM 06
let numbers = [1, 3, 4, 2, 1, 5, 3];

function testArray (numbers){
    numbers.filter(function(value, index, array){
        let addArray = 0;
        if(value = -1){
            addArray = array.push(value);
        }
    })

    return addArray;
}

console.log(testArray(numbers));