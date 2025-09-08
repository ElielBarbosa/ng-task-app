import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoInputAddAll } from './todo-input-add-all';

describe('TodoInputAddAll', () => {
  let component: TodoInputAddAll;
  let fixture: ComponentFixture<TodoInputAddAll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoInputAddAll]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoInputAddAll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
