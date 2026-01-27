//sum of two number using function

function sum(a ,b){
    return a+b
}
console.log(sum(2,6))



//check odd or even using function
function iseven(num){
    if (num%2==0)
        return "even"
    else 
        return "odd"
}
console.log(iseven(45))




// maximum number using function
function max(a,b){
    if(a>b)
        return a
    else 
        return b
}
console.log(max(40,60))




// factorial of a nummber using function
function factorial(n){
    let fact=1
    for (let i=1;i<=n;i++)
    {
        fact *=i
    }
    return fact 
}
console.log(factorial(6))




//palindrome check using function 
function isPalindrome(num) {
  let original = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (original === reversed) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}

