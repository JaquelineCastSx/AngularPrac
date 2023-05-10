import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSwapComponent } from './c-swap.component';

describe('CSwapComponent', () => {
  let component: CSwapComponent;
  let fixture: ComponentFixture<CSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSwapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
