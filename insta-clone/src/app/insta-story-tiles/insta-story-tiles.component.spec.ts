import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaStoryTilesComponent } from './insta-story-tiles.component';

describe('InstaStoryTilesComponent', () => {
  let component: InstaStoryTilesComponent;
  let fixture: ComponentFixture<InstaStoryTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaStoryTilesComponent]
    });
    fixture = TestBed.createComponent(InstaStoryTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
