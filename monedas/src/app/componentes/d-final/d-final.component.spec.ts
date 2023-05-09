import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFinalComponent } from './d-final.component';

describe('DFinalComponent', () => {
  let component: DFinalComponent;
  let fixture: ComponentFixture<DFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFinalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
