import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // no initialization error was coming so gave it a default value
  // input comes from parent : header to child : app-button
  @Input() color!: string;
  @Input() text!: string;
  // output goes to parent : header from child : app-button
  @Output() btnClick = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.btnClick.emit();
  }

}
