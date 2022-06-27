import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadNoSvgComponent } from './head-no-svg.component';

describe('HeadNoSvgComponent', () => {
  let component: HeadNoSvgComponent;
  let fixture: ComponentFixture<HeadNoSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadNoSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadNoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
