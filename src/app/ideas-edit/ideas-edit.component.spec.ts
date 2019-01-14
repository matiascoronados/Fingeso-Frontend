import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasEditComponent } from './ideas-edit.component';

describe('IdeasEditComponent', () => {
  let component: IdeasEditComponent;
  let fixture: ComponentFixture<IdeasEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
