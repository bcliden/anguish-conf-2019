import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlenaryComponent } from './plenary.component';

describe('PlenaryComponent', () => {
  let component: PlenaryComponent;
  let fixture: ComponentFixture<PlenaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlenaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlenaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
