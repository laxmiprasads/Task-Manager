import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-low-priority-tasks',
  imports: [CommonModule],
  templateUrl: './low-priority-tasks.component.html',
  styleUrl: './low-priority-tasks.component.css'
})
export class LowPriorityTasksComponent {
  @Input() lowtasks: { task: string; priority: string; date: string; pending:boolean}[] = [];
  markasRead(index: number) {
    this.lowtasks[index].pending = false;
  }
}
