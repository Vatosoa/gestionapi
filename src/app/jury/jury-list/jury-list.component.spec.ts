import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryListComponent } from './jury-list.component';

describe('JuryListComponent', () => {
  let component: JuryListComponent;
  let fixture: ComponentFixture<JuryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
