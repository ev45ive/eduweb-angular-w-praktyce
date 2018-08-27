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
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render task name", () => {
    const elem = fixture.debugElement.query(By.css(".task-name"));
    expect(elem.nativeElement.innerText).toEqual("Message works!");
  });

  it('should render updated task name',()=>{

    component.message = "Updated name!"
    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css(".task-name"));
    expect(elem.nativeElement.innerText).toEqual("Updated name!");
  })
});
