import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DInicialComponent } from './d-inicial.component';

describe('DInicialComponent', () => {
  let component: DInicialComponent;
  let fixture: ComponentFixture<DInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DInicialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
