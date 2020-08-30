import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIconsIfComponent } from './icons-if.component';

describe('PageIconsIfComponent', () => {
  let component: PageIconsIfComponent;
  let fixture: ComponentFixture<PageIconsIfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIconsIfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIconsIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
