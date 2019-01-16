import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaShowComponent } from './idea-show.component';

describe('IdeaShowComponent', () => {
  let component: IdeaShowComponent;
  let fixture: ComponentFixture<IdeaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
