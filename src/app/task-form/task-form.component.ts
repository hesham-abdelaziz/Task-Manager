import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ToggleService } from '../toggle.service';
import { TaskService } from './tasks.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  animations : [
    trigger('open' , [
      transition(':enter' , [
        style({top : '45%' , visibility : 'hidden' , opacity : 0}),
        animate('300ms ease' , style({top : '50%' , visibility : 'visible' , opacity : 1}))
      ]),
      transition(':leave' , [
        style({top : '50%' , visibility : 'visible' , opacity : 1}),
        animate('300ms ease-out' , style({top : '45%' , visibility : 'hidden' , opacity : 0}))
      ])
    ])
  ]
})

export class TaskFormComponent implements OnInit {
  isOpened : boolean;
  form : FormGroup;
  tasks : any = [];
  constructor(private toggleService : ToggleService , private taskService : TaskService) { 
 
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl('' , Validators.required),
      description : new FormControl('') ,
      date : new FormControl('' , Validators.required)
    })

    this.getTasks();
    this.taskService.tasksUpdated
    .subscribe( x => {
      this.isOpened = false;
      this.toggleService.isOpened.next(false);
      this.taskService.getTasks();
      this.taskService.taskSubj
      .pipe(take(1))
      .subscribe(x => {
        this.tasks = x;
      })
  
    })

  }

  openForm(){
    this.isOpened = true;
    this.toggleService.isOpened.next(true);
  }
  closeForm(){
    this.isOpened = false;
    this.toggleService.isOpened.next(false);
  }


  addTask(data){
    if(this.form.invalid) {
      return;
    }

    this.taskService.addTask(data);
    this.taskService.getTasks();
  }

  getTasks(){
    this.taskService.getTasks();
    this.taskService.taskSubj
    .pipe(take(1))
    .subscribe(x => {
      this.tasks = x;
    })
  }


  clearCompleted(){
    this.taskService.clearCompleted();
  }
}
