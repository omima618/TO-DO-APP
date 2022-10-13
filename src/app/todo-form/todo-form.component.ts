import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() triggerChildChanges = new EventEmitter<string>();
  taskName: string = '';
  isValid: boolean = true;
  constructor() {}
  submitHandler() {
    this.taskName ? (this.isValid = true) : (this.isValid = false);
    if (!this.isValid) return;
    this.triggerChildChanges.emit(this.taskName);
    this.taskName = '';
  }
  ngOnInit(): void {}
}
