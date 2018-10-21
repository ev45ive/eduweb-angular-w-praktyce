import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-task-list-item",
  templateUrl: "./task-list-item.component.html",
  styleUrls: ["./task-list-item.component.scss"]
})
export class TaskListItemComponent implements OnInit {
  message = "Message works!";

  editMode = false;

  edit() {
    this.editMode = true;
  }

  save() {
    this.editMode = false;
  }

  constructor() {}

  ngOnInit() {}
}
