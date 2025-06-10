import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPriorityTasksComponent } from './high-priority-tasks.component';

describe('HighPriorityTasksComponent', () => {
  let component: HighPriorityTasksComponent;
  let fixture: ComponentFixture<HighPriorityTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighPriorityTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighPriorityTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
