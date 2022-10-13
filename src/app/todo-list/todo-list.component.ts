import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() tasksList: Array<string> = [];
  constructor() {}
  ngOnInit(): void {}
  triggrtListChanges($event: string) {
    let taskIndex = this.tasksList.findIndex((task) => task === $event);
    this.tasksList.splice(taskIndex, 1);
  }
  deleteAll() {
    this.tasksList.splice(0, this.tasksList.length);
  }
}
