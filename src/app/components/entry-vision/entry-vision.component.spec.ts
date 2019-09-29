import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryVisionComponent } from './entry-vision.component';

describe('EntryVisionComponent', () => {
  let component: EntryVisionComponent;
  let fixture: ComponentFixture<EntryVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
