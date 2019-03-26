import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleContactsListComponent } from './simple-contacts-list.component';

describe('SimpleContactsListComponent', () => {
  let component: SimpleContactsListComponent;
  let fixture: ComponentFixture<SimpleContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleContactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
