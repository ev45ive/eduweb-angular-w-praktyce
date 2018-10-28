import { TestBed, inject } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { TasksService } from "./tasks.service";
import { Task } from "../task-list-item/Task";

fdescribe("TasksService", () => {
  let tasksService: TasksService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TasksService]
    });
  });

  beforeEach(inject(
    [TasksService, HttpTestingController],
    (service: TasksService, httpController: HttpTestingController) => {
      tasksService = service;
      controller = httpController;
    }
  ));

  it("should be created", () => {
    // TestBed.get(TasksService)
    expect(tasksService).toBeTruthy();
  });

  it("should fetch tasks", () => {
    tasksService.fetchAll().subscribe(tasks => {
      expect(tasks).toEqual([
        {
          id: 123,
          title: "Test Task"
        }
      ] as Task[]);
    });
    const req = controller.expectOne("/tasks", "Tasks API endpoint");

    req.flush([
      {
        id: 123,
        title: "Test Task"
      }
    ]);
  });

  it("should save task", () => {
    const task: Partial<Task> = {
      title: "Test Task"
    };
    tasksService.save(task).subscribe(task => {
      expect(task).toBeDefined();
      expect(task.id).toBeDefined();
    });
    const req = controller.expectOne( req => {
      return req.method == "POST" &&
      req.body == task
    });
    req.flush(
      {
        id: 123,
        title: "Test Task"
      },
      {
        status: 201,
        statusText: "Created"
      }
    );
  });
});
