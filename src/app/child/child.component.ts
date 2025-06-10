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
  @Input() tasks: { task: string; priority: string; date: string; pending:boolean}[] = [];
  
  markasRead(index: number) {
    this.tasks[index].pending = false;
  }
}