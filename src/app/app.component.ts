import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { HighPriorityTasksComponent } from './high-priority-tasks/high-priority-tasks.component';
import { MediumPriorityTasksComponent } from './medium-priority-tasks/medium-priority-tasks.component';
import { LowPriorityTasksComponent } from './low-priority-tasks/low-priority-tasks.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, FormsModule, ChildComponent, HighPriorityTasksComponent, MediumPriorityTasksComponent, LowPriorityTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
  task: string='';
  priority: string='HIGH';
  date:string='';
  ispending: boolean = true;
  allpriorities : boolean = true;
  highpriorities : boolean = false;
  mediumpriorities : boolean = false;
  lowpriorities : boolean = false;

  tasks: { task: string; priority: string; date: string; pending: boolean }[] = [];
  hptasks:{ task: string; priority: string; date: string; pending: boolean }[] = [];
  mdtasks:{ task: string; priority: string; date: string; pending: boolean }[] = [];
  lowtasks:{ task: string; priority: string; date: string; pending: boolean }[] = [];
  
  btnclicked () {
    this.allpriorities = true;
    this.highpriorities = false;
    this.mediumpriorities = false;
    this.lowpriorities = false;
    this.hptasks = [];
    this.mdtasks =[];
    this.lowtasks = [];

    if (this.task && this.priority && this.date) {
      this.tasks.push({ task: this.task, priority: this.priority , date: this.date , pending:this.ispending });
      this.task = '';
      this.priority = 'HIGH';
      this.date = '';
    } else {
      alert('Please fill in all fields');
    }
  }
  allpbtnClicked() {
    this.allpriorities = true;
    this.highpriorities = false;
    this.mediumpriorities = false;
    this.lowpriorities = false;
    this.hptasks = [];
    this.mdtasks =[];
    this.lowtasks = [];
  }
  hpbtnClicked() {
    this.highpriorities = true;
    this.allpriorities = false;
    this.mediumpriorities = false;
    this.lowpriorities = false;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].priority === 'HIGH') {
        this.hptasks.push(this.tasks[i]);
      }
    }
    this.mdtasks =[];
    this.lowtasks = [];
  }
  mdbtnClicked() {
    this.mediumpriorities = true;
    this.allpriorities = false;
    this.highpriorities = false;
    this.lowpriorities = false;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].priority === 'MEDIUM') {
        this.mdtasks.push(this.tasks[i]);
      }
    }
    this.hptasks = [];
    this.lowtasks = [];
  }
  lowbtnClicked() {
    this.mediumpriorities = false;
    this.allpriorities = false;
    this.highpriorities = false;
    this.lowpriorities = true;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].priority === 'LOW') {
        this.lowtasks.push(this.tasks[i]);
      }
    }
    this.hptasks = [];
    this.mdtasks =[];
  }
  clearAll() {
    this.tasks = [];
    this.hptasks = [];
    this.mdtasks =[];
  }

}