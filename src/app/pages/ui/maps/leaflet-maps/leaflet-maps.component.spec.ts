import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLeafletMapsComponent } from './leaflet-maps.component';

describe('PageLeafletMapsComponent', () => {
  let component: PageLeafletMapsComponent;
  let fixture: ComponentFixture<PageLeafletMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLeafletMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLeafletMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
