import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPostComponent } from './c-post.component';

describe('CPostComponent', () => {
  let component: CPostComponent;
  let fixture: ComponentFixture<CPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
