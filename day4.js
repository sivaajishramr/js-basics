//print all elements by using for loop 
let arr=[10,20,30,40,50]
for(let i=0;i<arr.length;i++)
    console.log(arr[i])




// find the sum of array elements
let arr1= [2,3,5,7,11]
let sum=0
for(let i=0 ;i<arr1.length;i++){
    sum+=arr1[i]
}
console.log("sum=",sum)



// to find the largest number 
let arr2 = [10, 25, 3, 47, 15];
let max = arr2[0];
for (let i = 1; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
}
console.log("largest = ",max)



//to count even number
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count =0;
for(let i=0;i<arr3.length;i++){
    if(arr3[i]%2==0){
        count++
    }
}
console.log("the even numbers are = ",count)



//the print a arry in reverse (no reverse method)
let arr4 = [1, 2, 3, 4, 5];
let reversed=[]
for(let i=arr4.length -1;i>=0;i--){
    reversed.push(arr4[i])
}
console.log("reversed array = ",reversed)




//to check the array is sorted 
let arr5 = [1, 2, 3, 4, 5];
let isSorted =true;
for(let i=0;i<arr5.length-1;i++){
    if(arr5[i]>arr5[i+1]){
        isSorted=false;
        break;
    }
}
console.log("is sorted = ",isSorted)