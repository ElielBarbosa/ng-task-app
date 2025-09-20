import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddItems } from './todo-input-add-items';

describe('TodoInputAddItems', () => {
  let component: TodoInputAddItems;
  let fixture: ComponentFixture<TodoInputAddItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoInputAddItems],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoInputAddItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
