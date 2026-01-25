//to print 1to 10
for (let i=0;i<11;i++)
{
   console.log(i)
 }



 // to print 2 to 10 even num
 for (let i=2;i<11;i+=2)
 {
    console.log(i)
 }



 //rewrite 'for' with 'while'
 let a= 0;
 while
 (a<4)
 {
    console.log(a);
    a++;
 }






 // count number in digits
 let num =12345;
 let count = 0;
 while(num >0)
    {count++

        num= Math.floor(num/10);
    }
console.log(count);




//reverse a number
let number=9087;
let reversed = 0;
while(number>0){
    let dight =number %10;
    reversed = reversed*10+dight;
    number=Math.floor(number/10)

}
console.log("Reversed number:", reversed);