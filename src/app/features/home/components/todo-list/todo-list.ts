import { Component } from '@angular/core';
import { TodoButtonDeleteAll } from '../todo-button-delete-all/todo-button-delete-all';
import { TodoInputAddItems } from '../todo-input-add-items/todo-input-add-items';

@Component({
  selector: 'app-todo-list',
  imports: [TodoButtonDeleteAll, TodoInputAddItems],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {}
