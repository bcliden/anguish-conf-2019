import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusivityComponent } from './inclusivity.component';

describe('InclusivityComponent', () => {
  let component: InclusivityComponent;
  let fixture: ComponentFixture<InclusivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclusivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
