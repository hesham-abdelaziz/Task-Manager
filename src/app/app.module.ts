import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksComponent } from './tasks/tasks.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TaskCategoryComponent } from './task-category/task-category.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from '@angular/material-moment-adapter';
@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TasksComponent,
    TaskCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    MatButtonModule ,
    MatIconModule ,
    MatInputModule ,
    ReactiveFormsModule,
    FormsModule ,
    MatDividerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatCardModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatMenuModule
  ],
  providers: [MatDatepickerModule , MatNativeDateModule , 
  {
    provide : MAT_MOMENT_DATE_ADAPTER_OPTIONS , useValue :{useUtc : true}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
