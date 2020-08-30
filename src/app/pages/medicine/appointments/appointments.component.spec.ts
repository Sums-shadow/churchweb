import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAppointmentsComponent } from './appointments.component';

describe('PageAppointmentsComponent', () => {
  let component: PageAppointmentsComponent;
  let fixture: ComponentFixture<PageAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
