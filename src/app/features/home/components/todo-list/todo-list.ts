import { Component } from '@angular/core';
import { TodoButtonDeleteAll } from '../todo-button-delete-all/todo-button-delete-all';
import { TodoInputAddAll } from '../todo-input-add-all/todo-input-add-all';

@Component({
  selector: 'app-todo-list',
  imports: [TodoButtonDeleteAll, TodoInputAddAll],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {}
