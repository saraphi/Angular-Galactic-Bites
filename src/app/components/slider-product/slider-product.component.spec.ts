import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProductComponent } from './slider-product.component';

describe('SliderProductComponent', () => {
  let component: SliderProductComponent;
  let fixture: ComponentFixture<SliderProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
