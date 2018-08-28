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

  it("should render updated task name", () => {
    component.message = "Updated name!";
    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css(".task-name"));
    expect(elem.nativeElement.innerText).toEqual("Updated name!");
  });

  it('should switch to edit mode when "edit" button is clicked', () => {
    const editSpy = spyOn(component, "edit").and.callThrough();
    const button = fixture.debugElement.query(By.css(".edit-button"));

    button.triggerEventHandler("click", {});

    expect(editSpy).toHaveBeenCalled();
    expect(component.editMode).toEqual(true);
  });

  it("should show task name inside input", () => {
    const input = fixture.debugElement.query(By.css(".task-name-input"));
    expect((input.nativeElement as HTMLInputElement).value).toEqual(
      component.message
    );
  });

  it("should update task name when input value changes", () => {
    const inputElem = fixture.debugElement.query(By.css(".task-name-input"));
    const elem = inputElem.nativeElement as HTMLInputElement;

    elem.value = "Changed value!";
    // elem.dispatchEvent(new Event("input"));

    inputElem.triggerEventHandler("input", {
      target: elem
    });

    expect(component.message).toEqual("Changed value!");
  });
});
