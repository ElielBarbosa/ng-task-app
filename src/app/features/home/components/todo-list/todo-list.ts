import { Component } from '@angular/core';
import { TodoButtonDeleteAll } from '../todo-button-delete-all/todo-button-delete-all';
import { TodoInputAddItems } from '../todo-input-add-items/todo-input-add-items';

//interface
import { TaskList } from '../model/task-list';
import { FormsModule } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [TodoButtonDeleteAll, CommonModule, TodoInputAddItems, FormsModule, JsonPipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  public taskList: Array<TaskList> = [];

  constructor() {}

  public deleteItemTaskList(indexEvent: number) {
    this.taskList.splice(indexEvent, 1);
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Você deseja ralmente Deletar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }
  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }
}
