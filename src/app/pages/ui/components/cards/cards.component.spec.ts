import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardsComponent } from './cards.component';

describe('PageCardsComponent', () => {
  let component: PageCardsComponent;
  let fixture: ComponentFixture<PageCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
