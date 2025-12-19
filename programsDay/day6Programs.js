// Find the second largest number in an array


let numbers =[10,20,30,40,50,3,4,5];
let largest = -Infinity;
let secondLargest = -Infinity;

for(let num of numbers){
    if(num>largest){
        secondLargest=largest;
        largest = num; 
    
} else if (num > secondLargest && num < largest) {
        secondLargest = num;
    }
}
console.log("second largest ",secondLargest);

//Find the longest word in a sentence

let sentence ="learning javascript daily";
let longestword ="";
let word =sentence.split(' ');
for (let words of word){
  if( words.length>longestword.length)
{
    longestword = words;
}
}
console.log("the longest word is:"+longestword);


//same program with reduce

let sentence1  ="learning javascript daily";

let string = sentence1.split(' ');
let longestString =
string.reduce((acc,curr)=>curr.length>acc.length?curr:acc,"");

console.log("the longest word is:"+longestString);
//second largest
let sentence2 ="learning javascript daily";
let longWord ="";
let secondLongWord="";
let words = sentence2.split(' ');
for (let word of words) {
  if (word.length > longWord.length) {
    secondLongWord = longWord;
    longWord = word;
  } else if (
    word.length > secondLongWord.length &&
    word.length < longWord.length
  ) {
    secondLongWord = word;
  }
}

console.log("The second long word is "+secondLongWord);

 //Reverse the words in a sentence
 let sentence3  = "I love coding";
 let word1 = sentence3.split(' ');
 let result ="";
 for (let i = word1.length-1;i>=0;i--){
    result += word1[i]+" ";
 }
 console.log("reverse the words in a sentence "+result);

  //Rotate an array by 1 position

  let array = [1,2,3,4,5,6];
  let last = array.pop();
  array.unshift(last);
  console.log(array);
  