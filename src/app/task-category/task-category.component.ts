import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToggleService } from '../toggle.service';


@Component({
  selector: 'task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css'],
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

export class TaskCategoryComponent implements OnInit {
  isOpened : boolean;
  form : FormGroup;
  categories : Array<any> = [];
  constructor(private toggleService  : ToggleService) { }

  ngOnInit(): void {
  this.form = new FormGroup({
    name : new FormControl('' , Validators.required),
    color : new FormControl('' , Validators.required),
  });

  if(localStorage.getItem('categories')){
    this.getCategories();
  }
  }


  openForm(){
    this.isOpened = true;
    this.toggleService.isOpened.next(true);
  }

  closeForm(){
    this.isOpened = false;
    this.toggleService.isOpened.next(false);
  }


  addCategory(data){
    if(this.form.invalid) {
      return;
    }
    const category = {
      id : Date.now(),
      name : data.name,
      color : data.color
    }
    this.categories.push(category);

    
    localStorage.setItem('categories' , JSON.stringify(this.categories));
    this.toggleService.isOpened.next(false);
    this.isOpened = false
    this.getCategories();
  } 

  getCategories(){
    this.categories = (JSON.parse(localStorage.getItem('categories')))

  }

  deleteCategory(id){
    console.log(id);
    this.categories = this.categories.filter(category => category.id != id);
    localStorage.setItem('categories' , JSON.stringify(this.categories));

  }
}
