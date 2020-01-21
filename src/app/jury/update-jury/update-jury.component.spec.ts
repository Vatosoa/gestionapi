import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJuryComponent } from './update-jury.component';

describe('UpdateJuryComponent', () => {
  let component: UpdateJuryComponent;
  let fixture: ComponentFixture<UpdateJuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
