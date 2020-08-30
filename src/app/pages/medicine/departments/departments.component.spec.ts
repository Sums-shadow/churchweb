import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDepartmentsComponent } from './departments.component';

describe('PageDepartmentsComponent', () => {
  let component: PageDepartmentsComponent;
  let fixture: ComponentFixture<PageDepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
