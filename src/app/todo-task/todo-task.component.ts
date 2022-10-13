import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css'],
})
export class TodoTaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() task: string = '';
  @Output() trrigerTaskChanges = new EventEmitter();
  isDone: boolean = false;
  doneHandler() {
    this.isDone = true;
  }
  undoHandler() {
    this.isDone = false;
  }
  deleteHandler() {
    this.trrigerTaskChanges.emit(this.task);
  }
}
