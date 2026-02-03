// //check if two strings are anagram
// let string1 = "listen";
// let char1 = [...string1];

// let string2 = "silent";
// let char2 = [...string2];

// if (char1.length !== char2.length) {
//   console.log("Not an anagram");
// } else {
//   let isAnagram = true;

//   for (let ch of char1) {
//     let index = char2.indexOf(ch);

//     if (index === -1) {
//       isAnagram = false;
//       break;
//     } else {
//       char2.splice(index, 1); // remove matched character
//     }
//   }

//   if (isAnagram) {
//     console.log("Strings are anagram");
//   } else {
//     console.log("Strings are not anagram");
//   }
// }


// // Write a function that takes a sentence (string) and returns an object showing how many times each word appears.

// function wordAppear(string){

//   let words = string. toLowerCase().split(' ');
//   const count ={

//   };
//   for (let word of words){
//     if(count[word]){
//       count[word]+=1;
      
//     }else{
//       count[word]=1;
//     }
//   }
//   let sentence = "JavaScript is fun and JavaScript is powerful";
// console.log(wordAppear(sentence));
  


// }


// // Reverse the string 

// let string = "Hello";
// let reverse="";
// let char =[...string];
// for (let i = char.length - 1; i >= 0; i--){
//  reverse = reverse + char[i];

// }
// console.log("the reverse of the word:"+reverse);


// check if the string is palindrome or not


// let string = "admmda";
// let reverse ="";
// for (let char of string){
//     reverse = char + reverse;
// }
// if (string === reverse){
//     console.log("string is palindrome");
// }

// let string ="admmda";
// let reverse = string.split("").reverse().join("");

// if(string === reverse){
//     console.log("string is palindrome");
// }else {
//     console.log("string is not palindrome");
// }
//priem number

function prime(number){
    if(number<=1) return false;
    for(let i = 2; i<number;i++){
        if(number%i==0){
            return false
        } 
    }
     return true;   

}

console.log(prime(1868));

function func(one = "Hi", two) {
  console.log(`${one} ${two}`);
}

func(undefined, "world");


const person={
    first:'virat',
    last:'kohli',
    twitter:'@vkohli',
    company:'Cricketer'
}

function displayName({first,last}){
    
    console.log(`the first and last name of a person is ${first} ${last}`);
}
displayName(person);