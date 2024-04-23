import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApiFormComponent } from './todo-api-form.component';

describe('TodoApiFormComponent', () => {
  let component: TodoApiFormComponent;
  let fixture: ComponentFixture<TodoApiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoApiFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoApiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
