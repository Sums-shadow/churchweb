import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVTimelineComponent } from './v-timeline.component';

describe('PageVTimelineComponent', () => {
  let component: PageVTimelineComponent;
  let fixture: ComponentFixture<PageVTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
