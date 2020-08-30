import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePatientsComponent } from './patients.component';

describe('PagePatientsComponent', () => {
  let component: PagePatientsComponent;
  let fixture: ComponentFixture<PagePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
