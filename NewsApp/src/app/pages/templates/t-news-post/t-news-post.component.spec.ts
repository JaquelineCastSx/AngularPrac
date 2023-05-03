import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNewsPostComponent } from './t-news-post.component';

describe('TNewsPostComponent', () => {
  let component: TNewsPostComponent;
  let fixture: ComponentFixture<TNewsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TNewsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TNewsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
