import { Component, Input } from '@angular/core';

import { type taskData } from './task/task.model';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true}) userID!:string
@Input({required:true}) name!:string
AddingTask = false;

constructor(private tasksService:TasksService){}

get selectedUserTASKS() {
  return this.tasksService.selectedUserTASKS(this.userID)
}
onAddingTask(){
  this.AddingTask = true;
}
onCancelAddingTask(){
  this.AddingTask = false;
}
}
