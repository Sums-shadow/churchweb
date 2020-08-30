import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePatientProfileComponent } from './patient-profile.component';

describe('PagePatientProfileComponent', () => {
  let component: PagePatientProfileComponent;
  let fixture: ComponentFixture<PagePatientProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePatientProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
