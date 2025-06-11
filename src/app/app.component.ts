import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, CommonModule, FormsModule, ChildComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-list';
  task: string='';
  priority: string='HIGH';
  ispending: boolean = true;
  allpriorities : boolean = true;
  highpriorities : boolean = false;
  mediumpriorities : boolean = false;
  lowpriorities : boolean = false;

  tasks: { task: string; priority: string; pending: boolean }[] = [];
  tasksf: { task: string; priority: string; pending: boolean }[] = [];
  // hptasks:{ task: string; priority: string; pending: boolean }[] = [];
  // mdtasks:{ task: string; priority: string; pending: boolean }[] = [];
  // lowtasks:{ task: string; priority: string; pending: boolean }[] = [];
  
  btnclicked () {
    this.tasksf=[];
    // this.allpriorities = true;
    // this.highpriorities = false;
    // this.mediumpriorities = false;
    // this.lowpriorities = false;
    // this.hptasks = [];
    // this.mdtasks =[];
    // this.lowtasks = [];
    if (this.task && this.priority ) {
      this.tasks.push({ task: this.task, priority: this.priority , pending:this.ispending });
      for (let i = 0; i < this.tasks.length; i++) {
        this.tasksf.push(this.tasks[i]);
    }
      this.task = '';
      this.priority = 'HIGH';
    } else {
      alert('Please fill in all fields');
    }
  }
  allpbtnClicked() {
    this.tasksf=[];
    // this.allpriorities = true;
    // this.highpriorities = false;
    // this.mediumpriorities = false;
    // this.lowpriorities = false;
    // this.hptasks = [];
    // this.mdtasks =[];
    // this.lowtasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
        this.tasksf.push(this.tasks[i]);
    }
  }
  hpbtnClicked() {
    this.tasksf=[];
    // this.highpriorities = true;
    // this.allpriorities = false;
    // this.mediumpriorities = false;
    // this.lowpriorities = false;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].priority === 'HIGH') {
        this.tasksf.push(this.tasks[i]);
      }
    }
    // this.mdtasks =[];
    // this.lowtasks = [];
  }
  mdbtnClicked() {
    this.tasksf=[];
    // this.mediumpriorities = true;
    // this.allpriorities = false;
    // this.highpriorities = false;
    // this.lowpriorities = false;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].priority === 'MEDIUM') {
        this.tasksf.push(this.tasks[i]);
      }
    }
    // this.hptasks = [];
    // this.lowtasks = [];
  }
  lowbtnClicked() {
    // this.mediumpriorities = false;
    // this.allpriorities = false;
    // this.highpriorities = false;
    // this.lowpriorities = true;
    this.tasksf=[];
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].priority === 'LOW') {
        this.tasksf.push(this.tasks[i]);
      }
    }
    // this.hptasks = [];
    // this.mdtasks =[];
  }
  clearAll() {
    this.tasks = [];
    this.tasksf=[];
    // this.hptasks = [];
    // this.mdtasks =[];
  }

}