import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRadioButtonsComponent } from './radio-buttons.component';

describe('PageRadioButtonsComponent', () => {
  let component: PageRadioButtonsComponent;
  let fixture: ComponentFixture<PageRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
