//Write a function that checks even or odd and returns the result.
function Number(n){
return n%2===0 ? "even" : "odd"
}

console.log(Number(5))



//Find the largest number in an array using a function.
function maxarray(arr){
    let max=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max) max=arr[i]

    }
    return max
}
console.log(maxarray([3,4,6,8]))




//Reverse a string using a function.
function Reverse(str){
let rev=""
for(let i=str.length-1;i>=0;i--){
    rev+=str[i]

}
return rev

}
console.log(Reverse("hello"))



//Array of students → return names of students above age 18
 function students(a){
 let result=[]
 for(let i=0;i<a.length;i++){
    if(a[i].age>18){
        result.push(a[i].name)

    }

 }
 return result

}
let a=[
    {name:"ajish",age:20},
    {name:"bala",age:19}
]

console.log(students(a))