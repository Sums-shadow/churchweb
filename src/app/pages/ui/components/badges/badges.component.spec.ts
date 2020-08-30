import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBadgesComponent } from './badges.component';

describe('PageBadgesComponent', () => {
  let component: PageBadgesComponent;
  let fixture: ComponentFixture<PageBadgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBadgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
