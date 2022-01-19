import { Injectable } from '@angular/core';
import { Observable ,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // here the value of showaddtask is passed to the subject
  toggleAddTask(): void {
    console.log('inside uiservice called from header -> add button')
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  // here it returns the 'showaddtask' value as observable
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
