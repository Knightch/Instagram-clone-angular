import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaFamiliarComponent } from './insta-familiar.component';

describe('InstaFamiliarComponent', () => {
  let component: InstaFamiliarComponent;
  let fixture: ComponentFixture<InstaFamiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstaFamiliarComponent]
    });
    fixture = TestBed.createComponent(InstaFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
