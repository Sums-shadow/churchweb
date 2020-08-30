import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFilterTableComponent } from './filter-table.component';

describe('PageFilterTableComponent', () => {
  let component: PageFilterTableComponent;
  let fixture: ComponentFixture<PageFilterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFilterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFilterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
