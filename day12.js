let tasks=[]
function addtask(task){
    tasks.push(task)
}
addtask("learn javascript")
addtask("pratice coding")
function showtasks(){
    for (let i=0;i<tasks.length;i++){
        console.log(i+": "+tasks[i])
    }
}
showtasks()
function removetask(index){
    if(index>=0 && index < tasks.length){
        tasks.splice(index,1)
}
else{
    console.log("invalid index")
}
}
removetask(0)
    showtasks()