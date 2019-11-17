import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExtrasComponent } from './forms-extras.component';

describe('FormsExtrasComponent', () => {
  let component: FormsExtrasComponent;
  let fixture: ComponentFixture<FormsExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
