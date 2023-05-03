import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPostsComponent } from './p-posts.component';

describe('PPostsComponent', () => {
  let component: PPostsComponent;
  let fixture: ComponentFixture<PPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
