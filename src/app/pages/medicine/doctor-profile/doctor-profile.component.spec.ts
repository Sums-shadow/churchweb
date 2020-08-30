import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoctorProfileComponent } from './doctor-profile.component';

describe('PageDoctorProfileComponent', () => {
  let component: PageDoctorProfileComponent;
  let fixture: ComponentFixture<PageDoctorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDoctorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDoctorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
