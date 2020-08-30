import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDatepickersComponent } from './datepickers.component';

describe('PageDatepickersComponent', () => {
  let component: PageDatepickersComponent;
  let fixture: ComponentFixture<PageDatepickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDatepickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDatepickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
