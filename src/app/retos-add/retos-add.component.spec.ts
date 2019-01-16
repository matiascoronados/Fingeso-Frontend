import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosAddComponent } from './retos-add.component';

describe('RetosAddComponent', () => {
  let component: RetosAddComponent;
  let fixture: ComponentFixture<RetosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
