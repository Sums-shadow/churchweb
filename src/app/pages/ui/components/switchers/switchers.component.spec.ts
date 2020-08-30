import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSwitchersComponent } from './switchers.component';

describe('PageSwitchersComponent', () => {
  let component: PageSwitchersComponent;
  let fixture: ComponentFixture<PageSwitchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSwitchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSwitchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
