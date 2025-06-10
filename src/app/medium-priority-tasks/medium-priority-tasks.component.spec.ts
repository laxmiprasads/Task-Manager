import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPriorityTasksComponent } from './medium-priority-tasks.component';

describe('MediumPriorityTasksComponent', () => {
  let component: MediumPriorityTasksComponent;
  let fixture: ComponentFixture<MediumPriorityTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumPriorityTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediumPriorityTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
