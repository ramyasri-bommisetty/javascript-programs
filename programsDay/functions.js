// Finding factorial

// Checking palindrome

// Reversing a string

// Generating a random number

// Checking leap year

// Finding largest number in an array


function factorial(n){
    if(n===0) return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));


function checkNumber(num) {
    // your code here
    if(num>0) return "positive";
    else if(num==0) return "zero";
    else return "negative";
    

}
console.log(checkNumber(10)); // Positive
console.log(checkNumber(-5)); // Negative
console.log(checkNumber(0));  // Zero


let checkEvenOdd = (number)=>number%2==0 ? "Even" :"Odd";
console.log(checkEvenOdd(2));
console.log(checkEvenOdd(3));



//checking palindrome

const isPalindrome=(str)=>{
    str =str.toLowerCase();
    for(let i <=str.length-1;i=0;i--){
        if(str[i]!=isPalindrome(str)){
            return false;
        }
    }
    return true;
    
};
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
