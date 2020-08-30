import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditAccountComponent } from './edit-account.component';

describe('PageEditAccountComponent', () => {
  let component: PageEditAccountComponent;
  let fixture: ComponentFixture<PageEditAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEditAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
