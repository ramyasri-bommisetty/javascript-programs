// Find all prime numbers between 1 and 100.

// Remove falsy values (false, 0, '', null, undefined, NaN) from an array.

// Write a function to capitalize the first letter of every word in a sentence.

// Find the intersection of two arrays.

// Write a function that returns the Fibonacci sequence up to n terms.

// Find all prime numbers between 1 and 100.
function prime(number){
if(number<=1){
    return false;
}
for (let i =2;i<number;i++){
    if(number%i==0){
        return false;
    }
}
return true;

}
// Remove falsy values (false, 0, '', null, undefined, NaN) from an array.
function removeFalsy(arr) {
    return arr.filter(function(item) {
        for(let i =0;i<arr.length;i++){
            if(arr[i]==false||arr[i]==0 ||arr[i]==null||arr[i]==undefined||arr[i]==NaN){
                
            }
        }

    });
}



let array = [0, 1, false, 2, '', 3, null, 'hello', undefined, NaN, true];
console.log(removeFalsy(array));

// Write a function to capitalize the first letter of every word in a sentence.
function CapitalizeFirstLetter(string){
  return string.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
}
console.log("the capaitilize words are"+CapitalizeFirstLetter("hello world"));

//Find the intersection of two arrays.
let array1 = [1,2,3,4,5];
let array2 = [1,3,4,5,6,7,8];
let array3 = [];

for (let item of array1) {
    if (array2.includes(item)) {
        array3.push(item);
    }
}

for (let num of array3) {
    console.log(num);
}
// Write a function that returns the Fibonacci sequence up to n terms.

function fibonacci(n1, n2, count) {
    let result = [];

    if (count >= 1) result.push(n1);
    if (count >= 2) result.push(n2);

    for (let i = 3; i <= count; i++) {
        let next = n1 + n2;
        result.push(next);
        n1 = n2;
        n2 = next;
    }

    return result;
}

// Example usage
console.log(fibonacci(1, 1, 10));
