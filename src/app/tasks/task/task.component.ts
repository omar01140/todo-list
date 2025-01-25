import { Component, inject, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type data } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:data
  private tasksService = inject(TasksService)

  onComplete(){
    this.tasksService.removeTask(this.task.id)
  }
}
