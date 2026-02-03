// sum of digits
let num=456
let sum=0
while(num>0){
    let digit= num%10
sum+=digit
num=Math.floor(num/10)
}
console.log(sum)


//count odd num in array
let arr =[1,2,3,4,5]
let count =0
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        count++
    }

}

console.log(count)


//reverse string
let str="str"
let reverse=""
for(let i=str.length-1;i>=0;i--){
    reverse+=str[i]
}
console.log(reverse);


//Find highest score (array of objects)


let scores = [
  { name: "A", score: 70 },
  { name: "B", score: 85 },
  { name: "C", score: 60 }
];

let maxScore = scores[0].score;
let topName = scores[0].name;

for (let i = 1; i < scores.length; i++) {
  if (scores[i].score > maxScore) {
    maxScore = scores[i].score;
    topName = scores[i].name;
  }
}

console.log(topName); 
