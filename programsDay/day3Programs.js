// 1️⃣ Check if a year is a leap year
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("This year " + year + " is leap");
    } else {
        console.log("This year " + year + " is not leap");
    }
}

leapYear(2000);


// 2️⃣ Convert Celsius to Fahrenheit
function fahrenheit(celsius = 13) {
    let convert = (celsius * 9/5) + 32;
    console.log(`The converted temperature from Celsius to Fahrenheit is ${convert}°F`);
}

fahrenheit();


// 3️⃣ Generate a random number between 1 and 100
function randomNumber() {
    let number = Math.floor(Math.random() * 100) + 1;
    console.log(`The random number generated is ${number}`);
}

randomNumber();


// 4️⃣ Calculate factorial (iterative)
function factorialIterative(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("The factorial is " + fact);
}

factorialIterative(5);

 //function factorial(num) {
//     if (num === 0 || num === 1) return 1; // base case
//     return num * factorial(num - 1); // call itself
// }

// console.log(factorial(5)); // 120

//Find the longest word in a sentence.


// 5️⃣ Find the longest word in a sentence
function findLongestWord(sentence) {
    let words = sentence.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

let mySentence = "your example sentence go here";
console.log("The longest word is: " + findLongestWord(mySentence));
