import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoIAmComponent } from './who-i-am.component';

describe('WhoIAmComponent', () => {
  let component: WhoIAmComponent;
  let fixture: ComponentFixture<WhoIAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoIAmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoIAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
