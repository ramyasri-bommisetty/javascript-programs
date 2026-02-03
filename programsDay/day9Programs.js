// REverse a sentence
// for example i love coding to gnidoc evol i


// let sentence ="hello world i";
// let words = sentence.split(' ');
// let reverse =" ";
// let letters ="words. ";

// for(char of words){
// for(char of letters){
//     reverse = char+reverse;
// }
// }
// console.log(reverse);


let sentence ="hello world";
let reverse =" ";
for (let i = sentence.length-1;i>=0;i--){
    reverse+= sentence[i];
}
console.log(reverse);


//count character frequency
let word ="banana";
let count ={};
for(let char of word){
    if(count[char]){
        count[char]+;
    }else
        count[char] =1;
}
console.log(count);

let word1 = "banana";
let count1 = {};

for (let char of word1) {
    count1[char] = (count1[char] || 0) + 1;
    //count[char]=(count[char] ?? 0)+1;
}

console.log(count1);






