import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettyTextComponent } from './pretty-text.component';

describe('PrettyTextComponent', () => {
  let component: PrettyTextComponent;
  let fixture: ComponentFixture<PrettyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrettyTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrettyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
