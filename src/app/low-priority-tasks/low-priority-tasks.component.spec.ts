import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowPriorityTasksComponent } from './low-priority-tasks.component';

describe('LowPriorityTasksComponent', () => {
  let component: LowPriorityTasksComponent;
  let fixture: ComponentFixture<LowPriorityTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowPriorityTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowPriorityTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
