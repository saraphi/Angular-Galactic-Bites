import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfilePopupComponent } from './delete-profile-popup.component';

describe('DeleteProfilePopupComponent', () => {
  let component: DeleteProfilePopupComponent;
  let fixture: ComponentFixture<DeleteProfilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProfilePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProfilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
