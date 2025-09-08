import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeleteAll } from './todo-button-delete-all';

describe('TodoButtonDeleteAll', () => {
  let component: TodoButtonDeleteAll;
  let fixture: ComponentFixture<TodoButtonDeleteAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoButtonDeleteAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonDeleteAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
