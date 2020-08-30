import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierComponent } from './atelier.component';

describe('AtelierComponent', () => {
  let component: AtelierComponent;
  let fixture: ComponentFixture<AtelierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
