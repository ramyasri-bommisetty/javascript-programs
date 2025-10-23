// Find the sum of all elements in an array.
// Remove duplicates from an array.
// Find the second largest number in an array.
// Check if a string is a palindrome.
// Merge two arrays and sort them.

//find the sum of all elements in an array

// let num = [1,4,6,8,9,0,3];
// let sum1 =num[0];
// for(let i=1;i<num.length;i++){
//     sum1 += num[i];

// }
// console.log("The sum of all numbers :"+sum1);

let array =[1,6,7,3,7];
let sum=0;
for(let element of array){
    sum += element;
}
console.log("the sum of all numbers :"+sum);
// Remove duplicates from array

let num = [7, 8, 6, 9, 8, 6, 3, 3];
let orgNum = [];

for (let i = 0; i < num.length; i++) {
    if (!orgNum.includes(num[i])) { // check if number already exists
        orgNum.push(num[i]); // add it if unique
    }
}

console.log("The array with no duplicates: " + orgNum);


let numbers = [7, 8, 6, 9, 8, 6, 3, 3];
let uniqueNums = []; // empty array to store unique numbers

for (let num of numbers) {
    if (!uniqueNums.includes(num)) {
        uniqueNums.push(num); // add number if not already in uniqueNums
    }
}

console.log("Array with no duplicates: " + uniqueNums);

// Check if a string is a palindrome.
let actString ="Madam";
let spread =[...actString];
let revString  ;
for(let i = spread.length-1;i>0;i--){
    revString += spread[i];
}
if(actString ==revString){
    console.log("the string is palindrome");
}else {
    console.log("the string is not palindrome");
}

//Merge two arrays and sort them.
let firstArr = [9, 7, 5];
let secondArr = [6, 5, 8, 1, 2];

// Merge arrays
let merge = [...firstArr, ...secondArr];
console.log("Merged array:", merge);

// Sorting using for loops (ascending order)
for (let i = 0; i < merge.length; i++) {
    for (let j = 0; j < merge.length - i - 1; j++) {
        if (merge[j] > merge[j + 1]) {
            // Swap
            let temp = merge[j];
            merge[j] = merge[j + 1];
            merge[j + 1] = temp;
        }
    }
}

console.log("Sorted array:", merge);