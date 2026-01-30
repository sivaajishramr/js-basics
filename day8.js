//print all properties of an objet 
 let person ={
    name :"ajish",
    age : 19,
    branch : "cse"
};
for (let key in person){
    console.log(key+":",person[key])
}


//count nummber of properties in an object
let mobile={
    brand:"samsung",
    price:200000,
    colour:"black",
    battary:"5000mAH"
}
let count =0
for(let key in mobile){
    count++
}
console.log("properties count ",count)



//check if a property exists 
let person1 = {
  name: "Ajish",
  age: 19
}
if("age" in person1){
    console.log("age exists")

}
else{
    console.log("age does not exists")
}


// to find the sum of numeric values in objects
let marks = {
  maths: 80,
  physics: 70,
  chemistry: 75
}
sum =0
for(let key in marks){
sum +=marks[key]
}
console.log("sum of value",sum)



//add and delete properties
let car={
    brand:"hyuandi",
    model:"i20"
}
car.year=2022
delete car.model
console.log(car )