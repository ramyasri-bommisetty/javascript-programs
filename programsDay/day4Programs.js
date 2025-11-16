// Create an object for a student (name, age, grade) and print its keys and values.

// Find total marks of all subjects in a student object.

// Sort an array of objects by age.

// Count how many times each element appears in an array.

// Convert an object into an array of key-value pairs.


// const person = {
//   firstname: 'Jane',
//   lastname: 'Doe',
//   fullname: function() {
//     return this.firstname + ' ' + this.lastname;
//   }
// };
// console.log(person.fullname());

// Create an object for a student (name, age, grade) and print its keys and values.
const student={
    name:"eee",
    age:30,
    grade:"ms"
};
for (let key in student ){
    console.log(key + ":"+student[key]);
}
// Find total marks of all subjects in a student object.


const subjects={
    math :20,
    science:30,
    social:40
};
const marks = Object.values(subjects);

const total = marks.reduce((total,currentMarks)=>{
    return total+currentMarks;
},0);
console.log(total);

//Sort an array of objects by age.


const users = [
  {
    id: 1,
    name: "Alice",
    age: 30,
    email: "alice@example.com"
  },
  {
    id: 2,
    name: "Bob",
    age: 24,
    email: "bob@example.com"
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    email: "charlie@example.com"
  }
];
users.sort((a,b)=>a.age -b.age);
console.log(users);

// Count how many times each element appears in an array.

const counts ={};

let array1 =[1,2,3,3,2,1,4,5,6,5,7];
for(let item of array1){
  if(counts[array1]){
    counts[item]++;
  }
  else 
    {
      counts[item] =1;
    }
}
console.log(counts);
// Convert an object into an array of key-value pairs.

let array = [
  { name: 'A', age: 20 },
  { name: 'B', age: 20 }
];

let result = array.reduce((acc, curr) => {
  acc[curr.age] = acc[curr.age] || [];
  acc[curr.age].push(curr.name);
  return acc;
}, {});

console.log(result);

