import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { ToggleService } from './toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isOpened : boolean;
  title = 'ToDo';
  tasksArray: Array<any> = [];


  constructor(
     toggleService : ToggleService
  ) {
    toggleService.isOpened
    .subscribe(value => {
      this.isOpened = value;
    })
  }
  ngOnInit() {
    
  }

 


}
