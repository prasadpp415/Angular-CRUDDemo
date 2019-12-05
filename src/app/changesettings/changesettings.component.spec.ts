import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesettingsComponent } from './changesettings.component';

describe('ChangesettingsComponent', () => {
  let component: ChangesettingsComponent;
  let fixture: ComponentFixture<ChangesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
