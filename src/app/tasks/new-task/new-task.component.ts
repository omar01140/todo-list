import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { taskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<taskData>()

  enteredTitle ="";
  enteredSummary ="";
  enteredDate ="";

  onCancel(){
    this.cancel.emit()
  }
  onSubmit(){
    this.add.emit({
      title : this.enteredTitle,
      summery : this.enteredSummary,
      date : this.enteredDate,
    })
  }

}
