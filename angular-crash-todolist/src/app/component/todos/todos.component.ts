import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/ToDo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: ToDo[];
  constructor() {}

  // Lifecycle method
  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'ToDo 1',
        completed: false,
      },
      {
        id: 2,
        title: 'ToDo 2',
        completed: true,
      },
      {
        id: 3,
        title: 'ToDo 3',
        completed: false,
      },
      {
        id: 4,
        title: 'ToDo 4',
        completed: true,
      },
    ];
  }
}
