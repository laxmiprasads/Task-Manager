import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() tasksf: { task: string; priority: string; pending:boolean}[] = [];
  markasRead(index: number) {
    this.tasksf[index].pending = false;
  }
}