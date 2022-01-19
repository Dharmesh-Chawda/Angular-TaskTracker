import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
// import { TASKS } from '../Mock-tasks';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor( private http:HttpClient ) { }

  // getTasks() fetches TASKS (data) from service , return type of getTasks() function is Task[] array
  getTasks() : Observable<Task[]> {
    // const tasks = of(TASKS)
    // return tasks;

    // http method of getting data (.get method) from url/api provided 
    // this.http is used becoz of the private variable name
    return this.http.get<Task[]>(this.apiUrl);
    
  }

  // here <Task> is used in observable becoz only one is to be deleted
  deleteTask(task: Task) : Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  // put method ofchttp for updating
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url , task, httpOptions);
  }

  AddTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl , task, httpOptions);
  }



 
}
