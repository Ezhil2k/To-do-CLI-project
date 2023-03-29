const rls = require("readline-sync"); // imported readline-sync package

tasks = [] // holds all the tasks
let n = 1 // used to know when to end program

// {
//     task: 'eat',
//     isComplete: true
// }

// * add, remove, complete - functions
// * task, id, status

// this will recevie the new task from the user
function addtask() {
    
    const next = rls.question(tasks.length+1 + ". ").trim()
    
    if(next === ""){
        console.log("empty");
        return
    }
    
    const task = {
        task: next,
        isComplete: false
    }
    tasks.push(task)
}

function taskstatus() {
    let taskid = rls.question("enter task id to change")
    tasks[taskid-1].isComplete = !tasks[taskid-1].isComplete
}
// this function will display previous tasks in array
function listtasks() { 
    tasks.forEach((element,index) => {
        console.log(index+1 + ". " + element.task + (element.isComplete ? ' √' : ' x') )
    });
}

// this function will loop code until we stop it by changing n value to 0
function run() {
    console.log("1. add\n2.remove\n3.status\n4.show\n5. exit")
    let cmdOpt = rls.question("Enter option: ").trim()
    while (cmdOpt !== "exit") {  
        switch(cmdOpt){
            case "add":
                addtask();
                break; 
            case "remove":
                removetask();
                break;
            case "status":
                taskstatus();
                break;
            case "show":
                listtasks();
                break;

        }
        cmdOpt = rls.question("Enter option: ").trim()
    }
}


run()


