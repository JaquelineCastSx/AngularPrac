import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CInicialComponent } from './c-inicial.component';

describe('CInicialComponent', () => {
  let component: CInicialComponent;
  let fixture: ComponentFixture<CInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
