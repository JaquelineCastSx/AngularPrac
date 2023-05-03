import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PGetPostComponent } from './p-get-post.component';

describe('PGetPostComponent', () => {
  let component: PGetPostComponent;
  let fixture: ComponentFixture<PGetPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PGetPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PGetPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
