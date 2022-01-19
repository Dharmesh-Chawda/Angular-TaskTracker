import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  
  @Input() task: Task;
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleRem: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // parameter came from child task with type Task
  onDelete(task: Task)
  {
    this.onDeleteTask.emit(task);
  }

  onToggleReminder(task: Task) {
    this.onToggleRem.emit(task);
  }

}
