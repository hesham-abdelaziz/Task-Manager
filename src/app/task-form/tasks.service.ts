import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn : 'root'})

export class TaskService {

    taskSubj = new Subject<any>();

    tasksArray : Array<any> = JSON.parse(localStorage.getItem('tasks'));
    tasksUpdated  = new Subject<boolean>();
    getTasks(){
        if(localStorage.getItem('tasks'))
        setTimeout(() => {
            this.taskSubj.next(JSON.parse(localStorage.getItem('tasks')));
        }, 0);
       }

   addTask(data){
    const task = {
        id : Date.now(),
        title : data.title,
        description : data.description,
        date : data.date,
        status : '',
        completed : false
    }

    this.tasksArray.push(task);

    this.tasksUpdated.next(true);
    localStorage.setItem('tasks' , JSON.stringify(this.tasksArray));

    this.getTasks();
   }

   deleteTask(id){
    this.tasksArray = this.tasksArray.filter(task => task.id != id);
    localStorage.setItem('tasks' , JSON.stringify(this.tasksArray));
    this.tasksUpdated.next(true);
    this.getTasks();
   }


   toggleCompleted(id){
    for(let i = 0; i < this.tasksArray.length; i++) {
        if(this.tasksArray[i].id == id){
            this.tasksArray[i].completed == false ? (this.tasksArray[i].completed = true) : (this.tasksArray[i].completed = false) 
        }
    }
    localStorage.setItem('tasks' , JSON.stringify(this.tasksArray));

   }

   clearCompleted(){
  this.tasksArray =  this.tasksArray.filter(task => task.completed != true )
    localStorage.setItem('tasks' , JSON.stringify(this.tasksArray));
    this.tasksUpdated.next(true);
    this.getTasks();
   }
}