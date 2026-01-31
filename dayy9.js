//to print all student name 
let student =[{
    name:"ajish",
    branch:"cse",
    age:20


},
{
    name:"bala",
    branch:"cse",
    age:19
}]
for(let i=0;i< student.length;i++){
console.log(student[i].name)
}



//count student above age 18
let count=0
for(let i=0;i<student.length;i++){
    if(student[i].age>18){
        count++
}
}
console.log(count)




// find student with highest age
let maxAge=student[0].age
let oldestName=student[0].name
for(let i =1;i<student.length;i++){
    if(student[i].age>maxAge){
        maxAge=student[i].age
        oldestName=student[i].name
    }
}
console.log(oldestName)



//to calculate total marks


let marks = [
  { subject: "Maths", score: 80 },
  { subject: "Physics", score: 70 },
  { subject: "Chemistry", score: 75 }
];

let total = 0;

for (let i = 0; i < marks.length; i++) {
  total += marks[i].score;
}

console.log(total);




//to find is exists or not


let found = false;

for (let i = 0; i < student.length; i++) {
  if (student[i].name === "ajish") {
    found = true;
    break;
  }
}

if (found) {
  console.log("Found");
} else {
  console.log("Not Found");
}
