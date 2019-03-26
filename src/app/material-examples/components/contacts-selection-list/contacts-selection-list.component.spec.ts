import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSelectionListComponent } from './contacts-selection-list.component';

describe('ContactsSelectionListComponent', () => {
  let component: ContactsSelectionListComponent;
  let fixture: ComponentFixture<ContactsSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
