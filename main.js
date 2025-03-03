let taskinput =  document.querySelector('.task')
let taskbutton =  document.querySelector('.taskbtn')
let tasklist =    document.querySelector('.list')

let taskarray = []

taskbutton.addEventListener('click',function(){
    taskarray.push(taskinput.value)
    addtodo();
})

function addtodo(){
    console.log(taskarray)
    tasklist.innerHTML = '';
    taskarray.map((item)=>{
        tasklist.innerHTML += `<li>${item}</li> <button class="delete">Delete</button>` 


        let removebtn = document.querySelectorAll('.delete')
        
        removebtn.forEach((item,index)=>{
        item.addEventListener('click',function(){
        taskarray.splice(index, 1)
        console.log(taskarray)
        addtodo()
        })
    })
    })
}