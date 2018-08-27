import { TaskListItemComponent } from "./task-list-item.component";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

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
    expect(component).toBeTruthy();
  });

  it("should render task name", () => {
    // const elems = fixture.debugElement.queryAll(By.css('p'))

    const elem = fixture.debugElement.query(By.css(".message"));
    expect(elem.nativeElement.innerText).toEqual("Message works!");
  });
});
