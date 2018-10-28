import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";

import { TaskListComponent } from "./task-list.component";
import { TasksService } from "../tasks/tasks.service";
import { of } from "rxjs";
import { Task } from "../task-list-item/Task";

fdescribe("TaskListComponent", () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListComponent],
      providers: [
        {
          provide: TasksService,
          useValue: jasmine.createSpyObj("TasksService", ["save", "fetchAll"])
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should fetch data from service", inject(
    [TasksService],
    (service: jasmine.SpyObj<TasksService>) => {
      service.fetchAll.and.returnValue(
        of([
          {
            id: 123,
            title: "Test"
          }
        ] as Task[])
      );

      component.fetchData();
      expect(component.tasks).toEqual([
        {
          id: 123,
          title: "Test"
        }
      ]);

      expect(service.fetchAll).toHaveBeenCalled();
    }
  ));
});
