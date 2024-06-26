import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableAssignmentsComponent } from './available-assignments.component';

describe('AvailableAssignmentsComponent', () => {
  let component: AvailableAssignmentsComponent;
  let fixture: ComponentFixture<AvailableAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableAssignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
