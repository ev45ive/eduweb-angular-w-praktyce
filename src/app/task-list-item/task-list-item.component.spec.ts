import { TaskListItemComponent } from "./task-list-item.component";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { FormsModule, NgModel } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  template: `<app-task-list-item [task]="task" (saved)="saved($event)">
  </app-task-list-item>`
})
class TaskListItemTEST_HOST {
  saved() {}
}

describe("TaskListItemComponent", () => {
  let fixture: ComponentFixture<TaskListItemTEST_HOST>;
  let component: TaskListItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListItemComponent, TaskListItemTEST_HOST],
      imports: [FormsModule],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(TaskListItemComponent);
    fixture = TestBed.createComponent(TaskListItemTEST_HOST);
    // component = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(TaskListItemComponent))
      .componentInstance;

    fixture.debugElement.context.task = {
      id: 123,
      title: "Test Task works!"
    };
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render task name", () => {
    const elem = fixture.debugElement.query(By.css(".task-name"));
    expect(elem.nativeElement.innerText).toEqual("Test Task works!");
  });

  it("should render updated task", () => {
    component.task = {
      id: 123,
      title: "Updated name!"
    };
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

  describe("in edit mode", () => {
    beforeEach(() => {
      component.editMode = true;
      fixture.detectChanges();
    });

    it('should switch edit mode off when "save" button is clicked', () => {
      component.editMode = true;
      fixture.detectChanges();
      const editSpy = spyOn(component, "save").and.callThrough();
      const button = fixture.debugElement.query(By.css(".save-button"));

      button.triggerEventHandler("click", {});

      expect(editSpy).toHaveBeenCalled();
      expect(component.editMode).toEqual(false);
    });

    it("should show task name inside input", () => {
      const input = fixture.debugElement.query(By.directive(NgModel));

      return fixture.whenStable().then(() => {
        expect((input.nativeElement as HTMLInputElement).value).toEqual(
          component.task.title
        );
      });
    });

    it("should update task name when input value changes", () => {
      // const inputElem = fixture.debugElement.query(By.css(".task-name-input"));
      const inputElem = fixture.debugElement.query(By.directive(NgModel));
      const elem = inputElem.nativeElement as HTMLInputElement;

      elem.value = "Changed value!";
      // elem.dispatchEvent(new Event("input"));

      inputElem.triggerEventHandler("input", {
        target: elem
      });

      expect(component.task.title).toEqual("Changed value!");
    });

    it("should show error message when task name is empty", () => {
      const inputElem = fixture.debugElement.query(By.directive(NgModel));
      const model = inputElem.injector.get(NgModel);
      // model.control.setValue('wartosc')
      // fixture.detectChanges()
      expect(model.valid).toBeFalsy();

      const error = fixture.debugElement.query(By.css(".error"));
      expect(error).not.toBeNull("Error message not found");
    });

    it("should emit 'saved' event when save button clicked", () => {
      const button = fixture.debugElement.query(By.css(".save-button"));
      const saveSpy = spyOn(component, "save").and.callThrough();
      const savedSpy = spyOn(fixture.componentInstance, "saved");

      const taskToSave = component.task;

      // component.saved.subscribe(task => {
      //   expect(taskToSave).toEqual(task);
      //   done();
      // });

      button.triggerEventHandler("click", {});
      expect(saveSpy).toHaveBeenCalled();
      expect(savedSpy).toHaveBeenCalledWith(taskToSave);
    });
  });
});
