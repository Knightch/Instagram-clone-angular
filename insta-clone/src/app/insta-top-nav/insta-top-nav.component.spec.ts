import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaTopNavComponent } from './insta-top-nav.component';

describe('InstaTopNavComponent', () => {
  let component: InstaTopNavComponent;
  let fixture: ComponentFixture<InstaTopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaTopNavComponent]
    });
    fixture = TestBed.createComponent(InstaTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
