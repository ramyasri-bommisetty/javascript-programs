// Day 1 - Program 1: Print all even numbers from 1 to 50
// Reverse a string.
// Check if a number is prime.
// Find the largest number in an array.
// Count vowels in a string.

// evenNumbers.js

for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

//Revese a string

let str = "hello";
let reversedStr = [...str].reverse().join('');
console.log(reversedStr); // "olleh"


//prime number
let num = 8;
let isprime = true;
if(num<=1&&num%2==0){
    console.log("num is not prime number");
}
else {
for(let i =2;i<num;i++){
    if(num % i ==0){
       isprime = false;
        break;
    }
}
if(isprime){
    console.log("num is prime");
}
else{
    console.log("num is not prime");
}
}
//largesgt number

let larNum = [1, 2, 3, 4, 5, 6];


let largest = larNum[0];


for (let i = 1; i < larNum.length; i++) {
    if (larNum[i] > largest) {
        largest = larNum[i];

    
}
}
console.log("The largest number in the array is " + largest);

// Count vowels in a string.
let str1 = "Ramya";
let chars = [...str1]; // spread operator splits string into ['h','e','l','l','o']

for (let char of chars) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log(char + " is a vowel");
    }
}





    
    

