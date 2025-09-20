import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input-add-items',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-input-add-items.html',
  styleUrl: './todo-input-add-items.scss',
})
export class TodoInputAddItems {
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string = '';

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = '';
    }
  }

  constructor() {}
}
