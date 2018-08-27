import { TaskListItemComponent } from "./task-list-item.component";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";

describe("TaskListItemComponent", () => {
  let fixture: ComponentFixture<TaskListItemComponent>;
  let component: TaskListItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListItemComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListItemComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    const html = fixture.nativeElement.innerHTML;

    console.log(html);
    expect(component).toBeTruthy();
  });
});
