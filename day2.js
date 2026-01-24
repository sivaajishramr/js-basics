//to find positive or negative
let num = 0;
if(num>0){
    console.log("its postive");}
else if (num < 0){
    console.log("negative");
}
else{
    console.log("its zero")
}





//odd or even 
if(num%2===0){
    console.log("even");}
else{
    console.log("odd");
}




// rewrite 'if' into '?'
let a=1;
let b=2;
let result = (a+b<4)?"below":"over";
console.log(result);





// vote  eligiblity
let age=19;
 age=(18<age)?"your are eligible":"not eligible";
 console.log(age)





//rewrite 'if else' into '?'
let employee,director;
let login = employee;
let message =(login==employee)?"hello employee":
(login==director)?"hello director":
(login=='')?"no login":'';
console.log(message);