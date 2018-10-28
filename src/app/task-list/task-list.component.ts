import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';
import { Task } from '../task-list-item/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = []

  fetchData(): any {
    this.service.fetchAll().subscribe(data => {
      this.tasks = data
    })
  }

  constructor(private service:TasksService) { }

  ngOnInit() {
  }

}
