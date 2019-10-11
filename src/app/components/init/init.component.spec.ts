import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitComponent } from './init.component';

describe('EntryVisionComponent', () => {
  let component: InitComponent;
  let fixture: ComponentFixture<InitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
