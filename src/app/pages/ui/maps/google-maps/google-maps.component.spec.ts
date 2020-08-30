import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGoogleMapsComponent } from './google-maps.component';

describe('PageGoogleMapsComponent', () => {
  let component: PageGoogleMapsComponent;
  let fixture: ComponentFixture<PageGoogleMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGoogleMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
