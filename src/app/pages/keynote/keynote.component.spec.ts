import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynoteComponent } from './keynote.component';

describe('KeynoteComponent', () => {
  let component: KeynoteComponent;
  let fixture: ComponentFixture<KeynoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeynoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
