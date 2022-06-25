import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMultiselectComponent } from './common-multiselect.component';

describe('CommonMultiselectComponent', () => {
  let component: CommonMultiselectComponent;
  let fixture: ComponentFixture<CommonMultiselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonMultiselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
