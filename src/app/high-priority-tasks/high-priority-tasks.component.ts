import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-high-priority-tasks',
  imports: [CommonModule],
  templateUrl: './high-priority-tasks.component.html',
  styleUrl: './high-priority-tasks.component.css'
})
export class HighPriorityTasksComponent {
  @Input() hptasks: { task: string; priority: string; date: string; pending:boolean}[] = [];
  markasRead(index: number) {
    this.hptasks[index].pending = false;
  }
}
