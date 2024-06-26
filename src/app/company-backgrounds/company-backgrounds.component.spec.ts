import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBackgroundsComponent } from './company-backgrounds.component';

describe('CompanyBackgroundsComponent', () => {
  let component: CompanyBackgroundsComponent;
  let fixture: ComponentFixture<CompanyBackgroundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyBackgroundsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyBackgroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
