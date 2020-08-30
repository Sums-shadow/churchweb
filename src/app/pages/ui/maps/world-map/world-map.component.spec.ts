import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWorldMapComponent } from './world-map.component';

describe('PageWorldMapComponent', () => {
  let component: PageWorldMapComponent;
  let fixture: ComponentFixture<PageWorldMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWorldMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWorldMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
