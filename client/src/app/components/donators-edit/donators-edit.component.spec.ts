import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatorsEditComponent } from './donators-edit.component';

describe('DonatorsEditComponent', () => {
  let component: DonatorsEditComponent;
  let fixture: ComponentFixture<DonatorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonatorsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
