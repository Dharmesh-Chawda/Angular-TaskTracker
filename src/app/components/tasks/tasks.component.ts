import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks: Task[] = [];

  constructor(private taskService : TaskService) { }

  // property tasks is set to whatever is coming from service, // subscribe to an observable
  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks();
    this.taskService.getTasks().subscribe( (tasks) => (this.tasks = tasks));
  }

  // after delete task , we filter out 
  deletetask(task: Task)
  {
    this.taskService
      .deleteTask(task)
        .subscribe( (tasks) => 
          ( this.tasks = this.tasks.filter( t=> t.id !== task.id) )
      );
  }

  togglereminder(task: Task)
  {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task)
  {
    console.log(task)
    this.taskService.AddTask(task).subscribe((task) => this.tasks.push(task));
  }


  }