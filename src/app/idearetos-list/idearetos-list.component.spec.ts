import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdearetosListComponent } from './idearetos-list.component';

describe('IdearetosListComponent', () => {
  let component: IdearetosListComponent;
  let fixture: ComponentFixture<IdearetosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdearetosListComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(IdearetosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
