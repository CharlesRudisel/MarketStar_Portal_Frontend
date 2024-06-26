import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAssignmentsComponent } from './pending-assignments.component';

describe('PendingAssignmentsComponent', () => {
  let component: PendingAssignmentsComponent;
  let fixture: ComponentFixture<PendingAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingAssignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
