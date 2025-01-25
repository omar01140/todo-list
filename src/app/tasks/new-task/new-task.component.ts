import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type taskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  private tasksService = inject(TasksService);

  enteredTitle ="";
  enteredSummary ="";
  enteredDate ="";

  onCancel(){
    this.cancel.emit()
  }
  onSubmit(){
    this.tasksService.addTask({
      title : this.enteredTitle,
      summery : this.enteredSummary,
      date : this.enteredDate,
    },this.userId)
    this.cancel.emit()
  }

}
