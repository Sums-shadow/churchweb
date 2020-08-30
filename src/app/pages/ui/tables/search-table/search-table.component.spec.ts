import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSearchTableComponent } from './search-table.component';

describe('PageSearchTableComponent', () => {
  let component: PageSearchTableComponent;
  let fixture: ComponentFixture<PageSearchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSearchTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
