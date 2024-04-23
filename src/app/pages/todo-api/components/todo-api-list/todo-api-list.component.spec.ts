import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoApiListComponent } from './todo-api-list.component';

describe('TodoApiListComponent', () => {
  let component: TodoApiListComponent;
  let fixture: ComponentFixture<TodoApiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoApiListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
