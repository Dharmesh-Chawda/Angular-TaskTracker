import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string = 'Task-Tracker';
  showAddTask:boolean = false;
  subscription: Subscription;

  // here the ontoggle method of uiservice is subscribed 
  //and it gives a value , since it is in constructor the value is passed to the component which toggles
  constructor( private uiService: UiService, private router:Router) {

    this.subscription = this.uiService.onToggle().subscribe( (value) => (this.showAddTask = value));

   }

  toggleAddTask()
  {
    console.log('toggleAddTask')
    this.uiService.toggleAddTask();

  }

  // this method hasRoute will be passed from html and it will return boolean 
  // if thr route passed is equal to base route (not about route) only then the add button will be displayed
  hasRoute(route: string)
  {
    return this.router.url === route;
  }

  ngOnInit(): void {
  }

}
