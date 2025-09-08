import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { TodoList } from './components/todo-list/todo-list';
import { TodoInputAddAll } from './components/todo-input-add-all/todo-input-add-all';
import { TodoButtonDeleteAll } from './components/todo-button-delete-all/todo-button-delete-all';

@Component({
  selector: 'app-home',
  imports: [Header, TodoList, TodoInputAddAll, TodoButtonDeleteAll],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
