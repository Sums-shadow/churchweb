import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRatingsComponent } from './ratings.component';

describe('PageRatingsComponent', () => {
  let component: PageRatingsComponent;
  let fixture: ComponentFixture<PageRatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
