import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { TodoList } from './components/todo-list/todo-list';
import { TodoButtonDeleteAll } from './components/todo-button-delete-all/todo-button-delete-all';
import { TodoInputAddItems } from './components/todo-input-add-items/todo-input-add-items';

@Component({
  selector: 'app-home',
  imports: [Header, TodoList, TodoInputAddItems, TodoButtonDeleteAll],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
