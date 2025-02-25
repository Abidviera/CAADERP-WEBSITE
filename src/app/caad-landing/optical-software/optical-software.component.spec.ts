import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticalSoftwareComponent } from './optical-software.component';

describe('OpticalSoftwareComponent', () => {
  let component: OpticalSoftwareComponent;
  let fixture: ComponentFixture<OpticalSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpticalSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpticalSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
