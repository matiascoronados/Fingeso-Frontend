import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdearetosAddComponent } from './idearetos-add.component';

describe('IdearetosAddComponent', () => {
  let component: IdearetosAddComponent;
  let fixture: ComponentFixture<IdearetosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdearetosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdearetosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
