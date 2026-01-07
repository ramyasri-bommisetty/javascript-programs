//  Sum all numbers in a nested array 

// let sum =0;
// let array =[1, [2, 3], [4, [5]]];
// for (let num of array){
//     if(array.isarray(...)){
//         sum+=(array[num]);
//     } else {
//         sum+=arr[num];
//     } 
// }
// console.log("The sum of nested array:"+sum);

// Double the numbers
// const nums =[1,2,3,4,5];

// const result = nums.map(n=>[n,n*2]);
// console.log(result);
// //convert words to uppercase
// const words =["apple","banana","cherry"];
// const result1 =words.map(words=>words.toUpperCase());
// console.log(result1);

// //exract name from objects
// const users = [
//   { name: "Sri", age: 25 },
//   { name: "Ram", age: 30 }
// ];
// const names =users.map(u=>u.mame);
// //console.log(names);
// 🟡 LEVEL 2: map + filter
// 4️⃣ Get even numbers and square them
//  const nums = [1, 2, 3, 4, 5, 6];
// const even = nums.filter(x=>x%2===0);
// const sqaures = nums.map(n=>n*2);
// console.log(sqaures);

// const nums = [1, 2, 3, 4, 5, 6];

// const squaresOfEven = nums
//   .filter(x => x % 2 === 0)  // pick only even numbers
//   .map(n => n * n);          // square each number

// console.log(squaresOfEven);

// // 5️⃣ Get adults (age ≥ 18)
// const people = [
//   { name: "A", age: 16 },
//   { name: "B", age: 21 },
//   { name: "C", age: 18 }
// ];
// const adults =people.filter(
// person=>person.age>=18).map(u=>u.name);
// console.log(adults);

// //Split sentences into words
// const sentences = [
//   "I love JS",
//   "flat map is cool"
// ];
// // const words = sentences.map(s => s.split(" "));

// const result = sentences.flatMap(item =>item.split(" "));
// console.log(result);

//   BONUS (Real-World)
// 1️⃣1️⃣ Flatten API-like data
// const orders = [
//   { id: 1, items: ["milk", "bread"] },
//   { id: 2, items: ["apple", "banana"] }
// ];


// Output:

// ["milk", "bread", "apple", "banana"]
// Duplicate numbers
// const nums = [1, 2, 3];


// Output:

// [1, 1, 2, 2, 3, 3]

// 🔵 LEVEL 4: reduce (Important!)
// 8️⃣ Sum of numbers
//  const nums = [10, 20, 30];
// const result = nums.reduce((acc,curr)=>acc+curr,0);
// console.log(result);

// 9️⃣ Find maximum number
 const nums = [5, 12, 8, 130, 44];
 if(nums.length<=1){
  console.log(nums[0]);
 }else
 {
  let maxNum = nums[0];
  for(let i =1;i<nums.length;i++){
    if(nums[i]>maxNum){
      maxNum =nums[i]
    }
    else {
      console.log("Maximum number is "+maxNum);
    }

  }
 }


// Count frequency of fruits
//  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
//   let count ={};
// for (let key in fruits){
//   const fruit = fruits[key];
//   if(count[fruit]){
//     count[fruit]++;
//   }else 
//     count[fruit]=1;

// }
// console.log(count);

