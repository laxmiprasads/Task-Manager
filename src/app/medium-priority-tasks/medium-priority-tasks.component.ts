import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-priority-tasks',
  imports: [CommonModule],
  templateUrl: './medium-priority-tasks.component.html',
  styleUrl: './medium-priority-tasks.component.css'
})
export class MediumPriorityTasksComponent {
   @Input() mdtasks: { task: string; priority: string; date: string; pending:boolean}[] = [];
  markasRead(index: number) {
    this.mdtasks[index].pending = false;
  }
}
