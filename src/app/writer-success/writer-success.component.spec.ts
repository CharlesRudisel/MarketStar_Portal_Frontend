import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterSuccessComponent } from './writer-success.component';

describe('WriterSuccessComponent', () => {
  let component: WriterSuccessComponent;
  let fixture: ComponentFixture<WriterSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriterSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriterSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
