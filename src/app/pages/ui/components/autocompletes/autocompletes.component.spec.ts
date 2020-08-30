import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAutocompletesComponent } from './autocompletes.component';

describe('PageAutocompletesComponent', () => {
  let component: PageAutocompletesComponent;
  let fixture: ComponentFixture<PageAutocompletesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAutocompletesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAutocompletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
