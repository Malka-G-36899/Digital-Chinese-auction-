import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsEditComponent } from './gifts-edit.component';

describe('GiftsEditComponent', () => {
  let component: GiftsEditComponent;
  let fixture: ComponentFixture<GiftsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiftsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
