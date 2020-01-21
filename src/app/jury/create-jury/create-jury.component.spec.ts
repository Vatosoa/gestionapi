import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJuryComponent } from './create-jury.component';

describe('CreateJuryComponent', () => {
  let component: CreateJuryComponent;
  let fixture: ComponentFixture<CreateJuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateJuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
