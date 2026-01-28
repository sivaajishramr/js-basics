// print each character of the string 
let str1 = "ajish"
for (let i=0;i<str1.length;i++){
    console.log(str1[i])
}



//Count vowels in a string

let str = "education"
let count  =0
for (let i=0;i<str.length;i++){
    
    let ch =str[i]
    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
        count++
    }
}
    console.log("vowels count:", count)



    // reversce the string 
    let reversed = ""
    for (let i=str.length-1;i>=0;i--){
        reversed += str[i]
    }
    console.log("reversed string:", reversed)



    //to check if string is palindrome

    let str4="madam"
    let isPalindrome= true
    for (let i=0;i<str4.length/2;i++){
        if (str4[i] !== str4[str4.length-1-i]){
isPalindrome=false
break
        }
        }
        if (isPalindrome){
            console.log("palindrome")
        }
        else{
            console.log("not palindrome")
        }



        // to change lower to upper and upper to lower
        let str3="ajish"
        console.log(str3.toUpperCase())
        let str6="RAM"
        console.log(str6.toLowerCase())