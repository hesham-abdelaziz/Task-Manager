import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task-form/tasks.service';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Array<any> = [];
  categories = JSON.parse(localStorage.getItem('categories'));
  constructor(private taskService : TaskService) { 
  }

  ngOnInit(): void {
      console.log(this.categories);
    
    this.taskService.getTasks();
    this.taskService.taskSubj
    .subscribe(tasks => {
      this.tasks = tasks
    })
  }


  deleteTask(id){
    this.taskService.deleteTask(id);
    this.taskService.getTasks();
  }

  toggleCompleted(id){
    this.taskService.toggleCompleted(id);
  }
}
