import { Injectable } from "@angular/core";
import { type taskData } from "./task/task.model";

@Injectable({providedIn: "root"})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor(){
    const tasks = localStorage.getItem("tasks");

    if (tasks) {
      this.tasks = JSON.parse(tasks)
    }
  }

  selectedUserTASKS(userID: string) {
    return this.tasks.filter((task)=> task.userId === userID);
  }

  addTask(taskData: taskData, userID: string){
    this.tasks.unshift({
      id: new Date().getDate().toString(),
      userId: userID,
      title: taskData.title,
      summary: taskData.summery,
      dueDate: taskData.date,
    });
    this.local()
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task)=>task.id !== id);
    this.local()
  }

  private local(){
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
}
