import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
})
export class TodoAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // dummy data
  tasksList: Array<string> = [
    'Angular task',
    'Study angualr',
    'Bootstrap task',
    'Read a book',
  ];
  task: any = '';
  triggerParentChanges($event: string) {
    this.tasksList.unshift($event);
  }
}
