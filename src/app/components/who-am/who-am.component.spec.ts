import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAmComponent } from './who-am.component';

describe('WhoAmComponent', () => {
  let component: WhoAmComponent;
  let fixture: ComponentFixture<WhoAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
