import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSidebarNewsItemComponent } from './c-sidebar-news-item.component';

describe('CSidebarNewsItemComponent', () => {
  let component: CSidebarNewsItemComponent;
  let fixture: ComponentFixture<CSidebarNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSidebarNewsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSidebarNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
