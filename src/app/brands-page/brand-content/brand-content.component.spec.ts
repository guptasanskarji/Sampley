import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandContentComponent } from './brand-content.component';

describe('BrandContentComponent', () => {
  let component: BrandContentComponent;
  let fixture: ComponentFixture<BrandContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
