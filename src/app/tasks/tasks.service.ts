import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../task-list-item/Task";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  
  save(task: Partial<Task>): Observable<Task> {
    return this.http.post<Task>("/tasks", task);
  }

  fetchAll(): Observable<Task[]> {
    return this.http.get<Task[]>("/tasks");
  }

  constructor(private http: HttpClient) {}
}
