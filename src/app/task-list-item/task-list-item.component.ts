import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: "app-task-list-item",
  templateUrl: "./task-list-item.component.html",
  styleUrls: ["./task-list-item.component.scss"]
})
export class TaskListItemComponent implements OnInit {
  message = "Message works!";

  @Input()
  task: Task;

  @Output()
  saved = new EventEmitter<Task>()


  editMode = false;

  edit() {
    this.editMode = true;
  }

  save() {
    this.editMode = false;
    this.saved.emit(this.task)
  }

  constructor() {}

  ngOnInit() {}
}
