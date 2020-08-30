import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAlertsComponent } from './alerts.component';

describe('PageAlertsComponent', () => {
  let component: PageAlertsComponent;
  let fixture: ComponentFixture<PageAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
