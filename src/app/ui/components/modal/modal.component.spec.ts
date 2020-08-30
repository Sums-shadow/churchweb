import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TCModalComponent } from './modal.component';

describe('TCModalComponent', () => {
  let component: TCModalComponent;
  let fixture: ComponentFixture<TCModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TCModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
