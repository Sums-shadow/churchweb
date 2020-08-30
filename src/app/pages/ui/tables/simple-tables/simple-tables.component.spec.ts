import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSimpleTablesComponent } from './simple-tables.component';

describe('PageTablesComponent', () => {
  let component: PageSimpleTablesComponent;
  let fixture: ComponentFixture<PageSimpleTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSimpleTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSimpleTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
