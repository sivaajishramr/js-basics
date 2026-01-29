// odd even 
let num =4
if(num %2 == 0){
    console.log("even")

}
else
    {
    console.log ("odd")
}


// print num from 1 to 5
for(let i=1;i<=5;i++)
    console.log(i)


//print elements of an array 
let arr=[10,30,40,50,20]
console.log(arr)



//function that return sum of two num
 function value (a,b){
    let sum=a+b
    console.log(sum)
}
console.log(value(3,7))


// print char of a string 
let str="ajish"
console.log(str)


// count vowels in string 
let str8="javascript"
let count =0
for (let i=0;i<str8.length;i++){
    let ch =str8[i]


if(ch=='a'||ch=='i'||ch=='o'||ch=='u'){
    count++
    
}
}
console.log(count)



//to find the largest number in array 
let arr2 =[10,20,30,40,50,60,70]
let max=arr2[0]
for(let i=0;i<arr2.length;i++){
    if(arr2[i]>max)
        max=arr2[i]
}console.log("largest number",max)




//reverse a string 
let str9 ="hello"
reversed=""
for(i=str9.length-1;i>=0;i--){
    reversed+=str9[i]

}
console.log("the reversed string ",reversed)




//to check if number is palindrome or not 
let num2 = 1221;
let original = num2;
let reversed2 = 0;

while (num2 > 0) {
  let digit = num2 % 10;
  reversed2 = reversed2 * 10 + digit;
  num2 = Math.floor(num2 / 10);
}

if (original === reversed2) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}




    //count even nummber in an array 
    let arr3=[1,2,3,4,5,6,9]
    count=0
    for(i=0;i<arr3.length;i++)
        if(arr3[i]%2==0){
            count++
        }


console.log("even number count are ",count)